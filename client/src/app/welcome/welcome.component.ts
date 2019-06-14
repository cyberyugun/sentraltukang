import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private router: Router, private data: DataService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'a',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/outline-category-24px.svg'));

      iconRegistry.addSvgIcon(
        'b',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/outline-perm_data_setting-24px.svg'));
        iconRegistry.addSvgIcon(
          'c',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/outline-build-24px.svg'));

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
