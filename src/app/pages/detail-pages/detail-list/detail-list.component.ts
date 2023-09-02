import {Component, OnInit} from '@angular/core';
import {Customer, Termin} from "../../../models/dog-trainer";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DogDbService} from "../../../services/dog-db.service";

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css'],
  imports: [CommonModule, RouterModule, IonicModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class DetailListComponent implements OnInit{
  termine!: Termin[];

  constructor(
    private DogDbService: DogDbService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.DogDbService.getAllTermineForCustomer(id || '');
    try {
      this.DogDbService.appointmentListState().subscribe((res) => {
        if (res) {
          this.DogDbService.fetchAppointments().subscribe(data => {
            this.termine = data;
            console.log('REFRESH TERMINE')
          });
        }
      });
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }

  editAppointment(appointmentId: number) {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate([id + '/updateTermin/' + appointmentId])
  }

 async deleteAppointment(appointment: Termin) {
    console.log("in FE deletion");
    await this.DogDbService.deleteTermin(appointment);
  }

}
