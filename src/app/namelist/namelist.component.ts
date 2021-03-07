import { Component, OnInit } from '@angular/core';

import {AddContListService} from '../add-cont-list.service';
import {contacts} from '../model/contacts.model';

@Component({
  selector: 'app-namelist',
  templateUrl: './namelist.component.html',
  styleUrls: ['./namelist.component.css']
})
export class NamelistComponent implements OnInit {
  public contactList: any;
  allEmployee: contacts[];
  constructor(private addcont:AddContListService){    
  }
  public num1 : string;

  ngOnInit(){
    this.name();
  }

  name(){
    this.addcont.getAllEmployee().subscribe(
      (data: contacts[]) =>{
        this.allEmployee = data;
        console.log(this.allEmployee);
      });
  }

  delete(id:number){
    console.log(id);
    this.addcont.deleteContact(id).subscribe(
      (data: contacts) =>{
        this.name();
      }
    );
  }

  // edit(emp){
  //   this.addcont.currentAddress = Object.assign({}, emp)
  // }
}
