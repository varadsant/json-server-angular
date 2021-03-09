import { Component, OnInit } from '@angular/core';


import {AddContListService} from '../add-cont-list.service';
import {countries} from '../model/countries.model';
//import {contacts} from '../model/contacts.model';
import {address} from '../model/address.model';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-adcontact',
  templateUrl: './adcontact.component.html',
  styleUrls: ['./adcontact.component.css']
})
export class AdcontactComponent {
  allCountries : countries[];
 // allEmployee: contacts[];
  emp_address : address;
  
 currentAddress:address = {
  street1: '',
  street2 : '',
  town : '',
  country: '',
  contactId: null,
  id: null
}
constructor(private addcont:AddContListService, private route: ActivatedRoute,
  private router: Router){ 
    let routeVal = this.route.snapshot.queryParamMap.get('id');
    //this.currentAddress.id = routeVal;
    //this.currentAddress.id = routeVal; 
   // this.currentAddress 
    this.getCountries();
    this.getAddress();

}

  addConct(routeVal){
    this.addcont.findAddress(routeVal).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

  getAddress(){
    this.addcont.getAddress().subscribe(
      (data) =>{
      this.emp_address = data;
      console.log(this.emp_address);
      this.currentAddress = this.emp_address[0];
      console.log(this.currentAddress);

      this.currentAddress[0].country = this.allCountries.filter( item => item.iso2 === this.emp_address[0].country); 
     console.log(this.currentAddress);
    });
  }
  

  submitForm(data){
    console.log(this.currentAddress);
    this.addcont.updateEmployee(data).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

  getCountries(){
    this.addcont.getCountry().subscribe(
      (data: countries[]) =>{
      this.allCountries = data;
      console.log(this.allCountries);
      });
  }


}
