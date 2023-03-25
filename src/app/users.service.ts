import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Users: object[] = [{
    firstName: 'ziad',
    lastname: 'tarek',
    address: '14 shubra',
    city: 'cairo',
    orderTotal: '30'
  }];
  data$;
  constructor() {

    this.data$ = new BehaviorSubject<any>(this.Users)
  }


  AddUsers(user: object) {
    this.data$.next(this.data$.getValue().concat([user]));
    console.log(this.Users);

  }

  getUsers() {
    return this.Users
  }
}
