import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Customer, CustomerData} from "../../models/dog-trainer";
import {IonicModule} from "@ionic/angular";
import {Router, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {DogDbService} from "../../services/dog-db.service";
// import {DatabaseManagerService} from "../../services/database-manager.service";
const ELEMENT_DATA: Customer[] = [
  {
      id: 1,
      name: 'Mustermensch',
      vorname: 'Jürgen',
      geburtsdatum: '01.01.1993',
      telefonNummer: '015788888',
      mobileNummer: '015788888',
      mail: 'mustermail@muster.de',
      street: 'Musterstraße',
      ort: 'Musterstadt',
      plz: '42069',
      hundName: 'Rexo',
      rasse: 'GoldenMuster',
      kastriert: 'Ja',
      gender: 'Weiblich',
      hgeburtsdatum: '01.01.1993',
      sonstiges: 'Was ein Hund dat ist',

  },
  {

      id: 2,
      name: 'Musteralien',
      vorname: 'Sibille',
      geburtsdatum: '01.01.1993',
      telefonNummer: '015788888',
      mobileNummer: '015788888',
      mail: 'mustermail@muster.de',
      street: 'Musterstraße',
      ort: 'Musterstadt',
      plz: '42069',
      hundName: 'Astro',
      rasse: 'GoldenMuster',
      kastriert: 'nein',
      gender: 'Mänlich',
      hgeburtsdatum: '01.01.1993',
      sonstiges: 'Was ein Hund dat ist'
  }
];

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


  constructor(
    private router: Router,
    private DogDbService: DogDbService
  ) {
  }

  ngOnInit() {
    try {
      this.isUpdate = false;
      this.DogDbService.customerDataListReady().subscribe((res) => {
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

  showAllCustomers() {
    // this.databaseService.getAllCustomersWithDogsForSearch();
    this.kundenListe = ELEMENT_DATA;
  }

  navigateToDetails(id: number) {
    this.router.navigate([id + '/details'])
  }

  navigateToCreate() {
    this.router.navigate(['/newCustomer'])
  }
}
