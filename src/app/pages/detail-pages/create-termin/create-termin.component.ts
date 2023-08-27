import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {DogDbService} from "../../../services/dog-db.service";
import {Customer, Termin} from "../../../models/dog-trainer";
import {CommonModule} from "@angular/common";
import {IonicModule, ToastController} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-termin',
  templateUrl: './create-termin.component.html',
  styleUrls: ['./create-termin.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, FormsModule, ReactiveFormsModule],
})
export class CreateTerminComponent  implements OnInit, OnDestroy {

  cusid!:string;
  // id!: number;
  // cusid!: number;
  datum: string = '';
  amnese: string = '';
  process: string = '';
  sonstiges: string = '';
  public alertButtons = ['OK'];

  constructor(
    private router: Router,
    private DogDbService: DogDbService,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.cleanup();
    this.cusid = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnDestroy() {
    this.datum = '';
    this.amnese = '';
    this.process = '';
    this.sonstiges = '';
  }


  back() {
    this.router.navigate([this.cusid + '/details'])
  }

 async createTermin() {
   this.cusid = this.route.snapshot.paramMap.get('id') || '';
    const outTermin: Termin = new Termin();
    outTermin.cusid = this.cusid;
    outTermin.datum = this.datum;
    outTermin.amnese = this.amnese;
    outTermin.process = this.process;
    outTermin.sonstiges = this.sonstiges;
   await this.DogDbService.makeNewTermin(outTermin);
   const toast = await this.toastController.create({
     message: 'Termin wurde gespeichert',
     duration: 1500,
     position: 'middle',
   });

   await toast.present();
   this.cleanup();
   this.router.navigate([this.cusid + '/details']);
  }

  cleanup() {
    this.datum = '';
    this.amnese = '';
    this.process = '';
    this.sonstiges = '';
  }
}
