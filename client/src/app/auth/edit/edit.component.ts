import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import { RestApiService } from '../../rest-api.service';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditFailedDialogComponent } from 'src/app/edit-failed-dialog/edit-failed-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/userlist/user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {maxDate;
  name = '';
  email = '';
  password = '';
  password1 = '';
  date='';
  hide = true;
  hidea = true;
  user: any = {};
  constructor( private route: ActivatedRoute,private _snackBar: MatSnackBar,private dialog: MatDialog,private router: Router,
    private data: DataService,private ps: UserService,
    private rest: RestApiService,private _location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editProduct(params.id).subscribe(res => {
        this.user = res;
    });
  });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  
 

  back() {
    this._location.back();
  }


  
  async onSubmit(form: NgForm) {
    try {
    
        const data = await this.rest.post(
          'http://localhost:4000/api/accounts/update/'+this.user,
          {
            name: form.value.name,
            email: form.value.email,
            password: form.value.password,
           date:form.value.date,
          },
        );
        if (data['success']) {
          localStorage.setItem('token', data['token']);
          this.data.success('Registration successful!');
          this._snackBar.open("Update Success", null, {
            duration: 2000,
          });
          this.router.navigate(['/userlist']);
        } else {
          this.dialog.open(EditFailedDialogComponent);
        }
      
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}