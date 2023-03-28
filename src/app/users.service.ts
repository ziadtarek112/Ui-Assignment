import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Users: object[] = [{
    firstName: 'ziad',
    lastName: 'tarek',
    address: '14 shubra',
    city: 'cairo',
    orderTotal: '30'
  }];
  data$;
  filteredUsers;
  constructor() {

    this.data$ = new BehaviorSubject<any>(this.Users);
    this.filteredUsers = new BehaviorSubject<any>(this.Users)

    this.data$.subscribe(res => {
      this.filteredUsers.next(res);
    })
  }


  AddUsers(user: object) {
    this.data$.next(this.data$.getValue().concat([user]));
    // this.filteredUsers.next(this.data$.getValue().concat([user]));

    console.log(this.Users);
  }

  getUsersByName(name: string) {
    let filtredUser = this.Users.map((fil: any) => { fil.firstName === name })
    return filtredUser
  }
  filterUsers(filterBy: String) {
    if (filterBy.length === 0) {
      this.filteredUsers.next(this.data$.value);
    }
    else {
      let res = this.data$.value.filter((user: any) => user.firstName === filterBy)
      this.filteredUsers.next(res);
    }

  }

}
