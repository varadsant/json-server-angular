import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamelistComponent } from './namelist/namelist.component';
import { HomeComponent } from './home/home.component';
import { AdcontactComponent} from './adcontact/adcontact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component:NamelistComponent },
  { path: 'addContact', component: AdcontactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }