import { Component, OnInit } from '@angular/core';

import {AddContListService} from '../add-cont-list.service';
import {contacts} from '../model/contacts.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-namelist',
  templateUrl: './namelist.component.html',
  styleUrls: ['./namelist.component.css']
})
export class NamelistComponent implements OnInit {
  public contactList: any;
  allEmployee: contacts[];
  constructor(private addcont:AddContListService, private route: ActivatedRoute,
    private router: Router){    
  }

  public name1 : string;
  public full_name: string;

  ngOnInit(){
    this.name();
  }

  edit(emp){
    //navigate to edit page wiith employee data
    this.router.navigate(['addContact'], {queryParams : emp});
    //populate form with existing emp data
  }

  addName(){
    let userObj: any = {}
      const split_name = this.full_name.split(" ")
      userObj.id = this.allEmployee[this.allEmployee.length -1].id + 1;
      userObj.first_name = split_name[0];
      userObj.last_name = split_name[1];
      userObj.avatar = "https://handmade.network/static/light/empty-avatar.svg";

      //console.log(userObj);
      //this.allEmployee.push(userObj);

      //console.log(this.allEmployee);
    
      this.pushContact(userObj);
      this.full_name = '';
  }

  pushContact(a){
    this.addcont.addToContact(a).subscribe(
      (data) => {
        this.name();
      }
    )
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
