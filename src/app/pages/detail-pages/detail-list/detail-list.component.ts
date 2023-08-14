import { Component } from '@angular/core';
import {Termin} from "../../../models/dog-trainer";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css'],
  imports: [CommonModule, RouterModule, IonicModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class DetailListComponent {
 termine: Termin[] = [{
   id: 1,
  customerId: 1,
  datum: '01.01.2023',
  amnese: 'Ganz wild',
  process: 'springen',
  sonstiges: 'mal schauen',
 }]

}
