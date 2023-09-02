import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {DetailListComponent} from "../../detail-pages/detail-list/detail-list.component";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {IonicModule, ToastController} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Customer} from "../../../models/dog-trainer";
import {DogDbService} from "../../../services/dog-db.service";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css'],
  imports: [CommonModule, DetailListComponent, RouterModule, IonicModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class CustomerUpdateComponent implements AfterViewInit, OnInit{
  kunde!: Customer;
  customerId!: string;

  constructor(
    private router: Router,
    private DogDbService: DogDbService,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {
  }

  async ngAfterViewInit() {
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
  async ngOnInit() {
      this.customerId = this.route.snapshot.paramMap.get('id') || '';

    }

  back() {
    this.router.navigate([this.kunde.id + '/details'])
  }

  async editCustomer() {
    console.log("Editing Customer");
    // const outCustomer: Customer = new Customer();
    // outCustomer.id = this.kunde.id
    // outCustomer.name = this.kunde.name;
    // outCustomer.vorname = this.vorName;
    // outCustomer.geburtsdatum = this.birthDate;
    // outCustomer.telefonNummer = this.telNumber;
    // outCustomer.mobileNummer = this.mobileNumber;
    // outCustomer.mail = this.mail;
    // outCustomer.sonstiges = this.sonstiges;
    // outCustomer.rasse = this.rasse;
    // outCustomer.hundName = this.dogName;
    // outCustomer.hgeburtsdatum = this.dogBirthday;
    // outCustomer.plz = this.plz;
    // outCustomer.ort = this.ort;
    // outCustomer.street = this.street;
    // outCustomer.gender = this.gender;
    // outCustomer.kastriert = this.kastriet;

    await this.DogDbService.updateCustomer(this.kunde);
    const toast = await this.toastController.create({
      message: 'Kunde wurde geändert',
      duration: 1500,
      position: 'middle',
    });
    this.router.navigate([this.kunde.id + '/details'])
  }


}
