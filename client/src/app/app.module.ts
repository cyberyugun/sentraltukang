import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { AuthGuardService } from './auth-guard.service';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {MatCardModule} from '@angular/material/card';
import { MessageComponent } from './message/message.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { UserlistComponent } from './userlist/userlist.component';
import { UserService } from './userlist/user.service';
import { EditComponent } from './auth/edit/edit.component';
import { LoginFailedDialogComponent } from './login-failed-dialog/login-failed-dialog.component';
import { SignupFailedDialogComponent } from './signup-failed-dialog/signup-failed-dialog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SessionComponent } from './session/session.component';
import { RegisterComponent } from './register/register.component';
import { EditFailedDialogComponent } from './edit-failed-dialog/edit-failed-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    MessageComponent,
    UserlistComponent,
    EditComponent,
    LoginFailedDialogComponent,
    SignupFailedDialogComponent,
    NavigationComponent,
    WelcomeComponent,
    SessionComponent,
    RegisterComponent,
    EditFailedDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [RestApiService, DataService,UserService],
  bootstrap: [AppComponent],
  entryComponents:[LoginFailedDialogComponent,SignupFailedDialogComponent]
})
export class AppModule { }
