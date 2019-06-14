import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  searchTerm = '';

  constructor(private router: Router, private data: DataService) {
    this.data.getProfile();
  }

  get token() {
    return localStorage.getItem('token');
  }

 

  logout() {
    this.data.user = {};
    localStorage.clear();
    this.router.navigate(['']);
  }

  search() {}
}
