import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  users :any =[]
  filtredUsers : any = []
  constructor(private user : UsersService) {

    this.user.filteredUsers.subscribe(val =>{
      this.users=val;
    })

  }

  filterText : string = ''
  filterUsers = () => {
      this.user.filterUsers(this.filterText)
  //   if (!this.filterText || this.filterText.length < 1) {
  //     this.search = this.userList;
  //     return;
  //   }
  //   this.search = this.userList.filter((userInfo) => {
  //     return (
  //       userInfo.userName
  //         .toLocaleLowerCase()
  //         .includes(this.filterText.toLocaleLowerCase()) ||
  //       userInfo.userEmail
  //         .toLocaleLowerCase()
  //         .includes(this.filterText.toLocaleLowerCase()) ||
  //       userInfo.userPhone
  //         .toLocaleLowerCase()
  //         .includes(this.filterText.toLocaleLowerCase()) ||
  //       userInfo.userAge.toString().includes(this.filterText.toLocaleLowerCase())
  //     );
  //   });
  // };
}
}

