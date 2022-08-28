import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceBasketComponent } from './choices/choice-basket/pages/choice-basket.component';
import { ChoiceListComponent } from './choices/choice-list/pages/choice-list.component';
import { DesignationLocationComponent } from './dashboard/designation-locations/pages/designation-location.component';
import { DesignationComponent } from './dashboard/designation/pages/designation.component';
import { LoginComponent } from './dashboard/login/login.component';

const routes: Routes = [
  { path: 'basket', component: ChoiceBasketComponent },
  { path: 'list', component: ChoiceListComponent },
  { path: 'designationLocation', component:DesignationLocationComponent  },
  { path: 'designation',component : DesignationComponent},
  { path: 'login',component : LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
