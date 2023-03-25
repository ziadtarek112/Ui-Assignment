import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users : any  = [];

  constructor (private user : UsersService) {

  }
  ngOnInit(): void {
    this.user.data$.subscribe(val => {
      this.users=JSON.stringify(val)

    })
  }


}
