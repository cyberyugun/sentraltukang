import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private router: Router, private data: DataService) {
    this.data.getProfile();
  }
  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }


  
  get token() {
    return localStorage.getItem('token');
  }

 
  logout() {
    this.data.user = {};
    localStorage.clear();
    this.router.navigate(['']);
  }
}
