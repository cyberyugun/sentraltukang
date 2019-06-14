import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable,of } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../models/user.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';  
import { Location } from '@angular/common';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit,AfterViewInit {
  dataSource = new MatTableDataSource<User>();
 
  
  displayedColumns :string[]= ['index', 'name', 'email', 'date','actions'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router,public userService: UserService,private _location: Location) { }
  users: User[];

  ngOnInit() {
    this.RenderDataTable(); 
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.userService
    .getUser()
    .subscribe((data: User[]) => {
      this.users = data;
  });
  }
  ngAfterViewInit() {
  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  RenderDataTable() {  
    this.userService.getUser()  
      .subscribe(  
      res => {  
       this.dataSource.data = res;  


      },  
      error => {  
        console.log('There was an error while retrieving Posts !!!' + error);  
      });  
  } 
  
  deleteProduct(id) {
    this.userService.deleteProduct(id).subscribe(res => {
      this.users.splice(id, 1);
      window.location.reload(true);
    });
  }

  

  back() {
    this.router.navigate(['/home']);
  }
}





