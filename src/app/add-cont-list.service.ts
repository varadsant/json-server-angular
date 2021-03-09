import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {contacts} from './model/contacts.model';
import {countries} from './model/countries.model';
import {address} from './model/address.model';

const headerOpt = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AddContListService {
  public contactList : any = ['abc','qqq'];
  mockUrl = 'http://localhost:3000/contacts';
  countries = 'http://localhost:3000/countries';
  address = 'http://localhost:3000/addresses';

  constructor(
    private http: HttpClient
  ) { }

  getCountry(): Observable<countries[]>{
    return this.http.get<countries[]>(this.countries, headerOpt);
  }

  getAllEmployee(): Observable<contacts[]> {
    return this.http.get<contacts[]>(this.mockUrl, headerOpt);
  }

  updateEmployee(updateData){
    return this.http.put(this.address+'/'+updateData.id, updateData, headerOpt);
  }

  deleteContact(id: number){
    return this.http.delete(this.mockUrl+'/'+id, headerOpt);
  }

  getList(){
    return this.contactList;
  }

  addCont(name){
    this.contactList.push(name);
  }

  addToContact(cont): Observable<any>{
    return this.http.post(this.mockUrl, cont, headerOpt);
  }

  getAddress(): Observable<address>{
    return this.http.get<address>(this.address, headerOpt);
  }

  findAddress(id): Observable<address>{
    const a = this.http.get<address>(this.address+'/'+id, headerOpt);
    if(a === null){
      return null;
    }else{
      return this.http.get<address>(this.address+'/'+id, headerOpt);
    }
  }

}
