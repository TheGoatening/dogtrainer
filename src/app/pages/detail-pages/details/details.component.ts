import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Customer} from "../../../models/dog-trainer";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailListComponent} from "../detail-list/detail-list.component";
import {DogDbService} from "../../../services/dog-db.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [CommonModule, DetailListComponent, RouterModule, IonicModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class DetailsComponent implements OnInit, AfterViewInit {
  kunde!: Customer;
  customerId!: string;

  constructor(private router: Router,
              private DogDbService: DogDbService,
              private route: ActivatedRoute
  ) {
  };

  async ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get('id') || '';
    await this.DogDbService.getCustomerById(this.customerId);
    try {
      this.DogDbService.customerItemState().subscribe((res) => {
        if (res) {
          this.DogDbService.fetchCustomerItem().subscribe(data => {
            this.kunde = data[0];
          });
        }
      });
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }

  async ngAfterViewInit() {

  }

  back() {
    this.router.navigate(['']);
  }

  createNewTermin() {
    this.router.navigate([this.customerId + '/newTermin'])
  }
}
