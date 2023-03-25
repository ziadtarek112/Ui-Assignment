import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  firstName : string = '';
  lastName : string = '';
  address : string = '';
  city : string = '';
  state : string = '';
  orderTotal : string = '';

  constructor (private user : UsersService){

  }
  onClick(){

  let userObj = {
    firstName : this.firstName,
    lastName : this.lastName,
    address : this.address,
    city : this.city,
    state : this.state,
    orderTotal : this.orderTotal
  }


    this.user.AddUsers(userObj)
   

  }

}
