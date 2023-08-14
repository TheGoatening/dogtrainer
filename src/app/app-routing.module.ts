import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import {DetailsComponent} from "./pages/detail-pages/details/details.component";
import {CustomerCreateComponent} from "./pages/customers/customer-create/customer-create.component";
import {CustomerUpdateComponent} from "./pages/customers/customer-update/customer-update.component";


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
    component: DetailsComponent
  },
  {
    path: 'newCustomer',
    component: CustomerCreateComponent
  },
  {
    path: ':id/editCustomer',
    component: CustomerUpdateComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
