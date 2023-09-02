import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {DogDbService} from "../../../services/dog-db.service";
import {Customer, Termin} from "../../../models/dog-trainer";
import {CommonModule} from "@angular/common";
import {IonicModule, ToastController} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-update-termin',
  templateUrl: './update-termin.component.html',
  styleUrls: ['./update-termin.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, FormsModule, ReactiveFormsModule],
})
export class UpdateTerminComponent  implements OnInit {
  termin!: Termin;
  cusid!: string;

  constructor(
    private router: Router,
    private DogDbService: DogDbService,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) { }

 async ngOnInit() {
     this.cusid = this.route.snapshot.paramMap.get('id') || '';
    const appointmentId = this.route.snapshot.paramMap.get('aid') || '';
    await this.DogDbService.getAppointmentById(appointmentId);
    try {
      this.DogDbService.appointmentItemState().subscribe((res) => {
        if (res) {
          this.DogDbService.fetchAppointment().subscribe(data => {
            this.termin = data[0];
          });
        }
      });
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }


  back() {
    this.router.navigate([this.cusid + '/details'])
  }

 async updateTermin() {
   await this.DogDbService.updateTermin(this.termin);
   const toast = await this.toastController.create({
     message: 'Termin wurde verändert',
     duration: 1500,
     position: 'middle',
   });

   await toast.present();
   this.router.navigate([this.termin.cusid + '/details']);
  }
}
