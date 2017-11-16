import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  templateUrl: 'Profile.component.html'
})
export class ProfileComponent implements OnInit{

  users: User;

  constructor(private userService: UserService) { }

  ngOnInit(){
  }

}
