import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
  imports: [CommonModule, RouterModule, IonicModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class CustomerCreateComponent {

  constructor(private router: Router,) {
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
  plz: string = '';
  ort: string = '';
  street: string = '';

  createCustomer() {
    console.log('customerCreated')
    this.router.navigate(['']);
  }
}
