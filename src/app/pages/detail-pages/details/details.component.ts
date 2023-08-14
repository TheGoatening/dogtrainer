import { Component } from '@angular/core';
import {Customer} from "../../../models/dog-trainer";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailListComponent} from "../detail-list/detail-list.component";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [CommonModule, DetailListComponent, RouterModule, IonicModule, FormsModule, ReactiveFormsModule],
  standalone:true
})
export class DetailsComponent {

  constructor(private router: Router) {
  }

  kunde: Customer = {
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
  };

  back() {
    this.router.navigate(['']);
  }
}
