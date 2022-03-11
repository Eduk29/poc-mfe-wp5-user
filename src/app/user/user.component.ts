import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  title = "App User";

  constructor() { }

  ngOnInit(): void {
  }

  get displayNavbar(): boolean {
    console.log(location.port === '3003');

    return location.port === '3003';
  }

}
