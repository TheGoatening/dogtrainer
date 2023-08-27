import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DogDbService} from "../../../services/dog-db.service";
import {Department} from "../../../models/employee-dept";
import {Customer} from "../../../models/dog-trainer";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
  imports: [CommonModule, RouterModule, IonicModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class CustomerCreateComponent {

  @Output() outCustomerEvent = new EventEmitter<Customer>();

  constructor(
    private router: Router,
    private DogDbService: DogDbService ) {
  }

  Name: string = '';
  vorName: string = '';
  birthDate: string = '';
  telNumber: string = '';
  mobileNumber: string = '';
  mail: string = '';
  sonstiges: string = '';
  rasse: string = '';
  dogName: string = '';
  dogBirthday: string = '';
  plz: string = '';
  ort: string = '';
  street: string = '';
  gender: number = 0;
  kastriet: number = 0;


  // createCustomer() {
  //   // this.DogDbService.getCustomer();
  //   console.log('customerCreated')
  //   this.router.navigate(['']);
  // }

  back() {
    this.router.navigate(['']);
  }

  /**
   * submit a Customer
   */
  async createCustomer() {
    console.log("Creating Customer");
    const outCustomer: Customer = new Customer();
    outCustomer.name = this.Name;
    outCustomer.vorname = this.vorName;
    outCustomer.geburtsdatum = this.birthDate;
    outCustomer.telefonNummer = this.telNumber;
    outCustomer.mobileNummer = this.mobileNumber;
    outCustomer.mail = this.mail;
    outCustomer.sonstiges = this.sonstiges;
    outCustomer.rasse = this.rasse;
    outCustomer.hundName = this.dogName;
    outCustomer.hgeburtsdatum = this.dogBirthday;
    outCustomer.plz = this.plz;
    outCustomer.ort = this.ort;
    outCustomer.street = this.street;
    outCustomer.gender = this.gender;
    outCustomer.kastriert = this.kastriet;

   await this.DogDbService.addCustomer(outCustomer);
  }
}
