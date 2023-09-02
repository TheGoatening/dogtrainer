import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import {DetailsComponent} from "./pages/detail-pages/details/details.component";
import {CustomerCreateComponent} from "./pages/customers/customer-create/customer-create.component";
import {CustomerUpdateComponent} from "./pages/customers/customer-update/customer-update.component";
import {CreateTerminComponent} from "./pages/detail-pages/create-termin/create-termin.component";
import {UpdateTerminComponent} from "./pages/detail-pages/update-termin/update-termin.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: ':id/details',
    component: DetailsComponent,
  },
  {
    path: 'newCustomer',
    component: CustomerCreateComponent
  },
  {
    path: ':id/editCustomer',
    component: CustomerUpdateComponent
  },
  {
    path: ':id/newTermin',
    component: CreateTerminComponent
  },
  {
    path: ':id/updateTermin/:aid',
    component: UpdateTerminComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
