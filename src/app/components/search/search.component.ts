import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Customer, CustomerData} from "../../models/dog-trainer";
import {IonicModule} from "@ionic/angular";
import {Router, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {DogDbService} from "../../services/dog-db.service";
// import {DatabaseManagerService} from "../../services/database-manager.service";

@Component({
  selector: 'general-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [CommonModule, RouterModule, IonicModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class SearchComponent implements OnInit {
  public kundenListe: Customer[] = [];
  private isUpdate: boolean = false;
  searchName: string = '';
  searchType: string = 'hundName';



  constructor(
    private router: Router,
    private DogDbService: DogDbService
  ) {
  }

  ngOnInit() {

  }

 async showAllCustomers() {
    try {
      await this.DogDbService.getAllCustomers();
     await this.DogDbService.customerDataListReady().subscribe((res) => {
        if(res) {
          this.DogDbService.fetchCustomers().subscribe(data => {
            this.kundenListe = data;
          });
        }
      });
    } catch(err) {
      throw new Error(`Error: ${err}`);
    }
  }

  async searchBar() {
    try {
     await this.DogDbService.getAllCustomersBasedOnSearch(this.searchName, this.searchType);
     await this.DogDbService.customerDataListReady().subscribe((res) => {
        if(res) {
         this.DogDbService.fetchCustomers().subscribe(data => {
            this.kundenListe = data;
          });
        }
      });
    } catch(err) {
      throw new Error(`Error: ${err}`);
    }
  }

  navigateToDetails(id: number) {
    console.log(id);
    this.router.navigate([id + '/details'])
  }

  navigateToCreate() {
    this.router.navigate(['/newCustomer'])
  }
}
