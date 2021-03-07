import { Component, OnInit } from '@angular/core';


import {AddContListService} from '../add-cont-list.service';
import {countries} from '../model/countries.model';
//import {contacts} from '../model/contacts.model';

@Component({
  selector: 'app-adcontact',
  templateUrl: './adcontact.component.html',
  styleUrls: ['./adcontact.component.css']
})
export class AdcontactComponent implements OnInit {
  allCountries : countries[];
 // allEmployee: contacts[];
  

  constructor(private addcont:AddContListService){
  }

  ngOnInit(){
    this.getCountries();
  }

  getCountries(){
    this.addcont.getCountry().subscribe(
      (data: countries[]) =>{
      this.allCountries = data;
      console.log(this.allCountries);
      });
  }


}
