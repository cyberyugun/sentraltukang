import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { RestApiService } from '../../rest-api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessageComponent } from 'src/app/message/message.component';
import { LoginFailedDialogComponent } from 'src/app/login-failed-dialog/login-failed-dialog.component';
import { SessionComponent } from 'src/app/session/session.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  loginForm: FormGroup;
  constructor(private dialog: MatDialog,
    private router: Router,
    private rest: RestApiService,
    private data: DataService,
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }


  async login() {
    try {
     
        const data = await this.rest.post(
          'http://localhost:4000/api/accounts/login',
          {
            email: this.loginForm.controls['email'].value,
            password: this.loginForm.controls['password'].value,
          },
        );
        if (data['success']) {
          localStorage.setItem('token', data['token']);
          this.router.navigate(['/home']);
        } else {
         
          // this.openDialog();
          this.dialog.open(LoginFailedDialogComponent);
        }
      
    } catch (error) {
      this.dialog.open(SessionComponent);
    }
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px'
  //   });

  
  // }

}
