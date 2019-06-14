import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
@Injectable()
export class UserService {
  private serviceUrl = 'http://localhost:4000/api/accounts/list';
  public Url = 'http://localhost:4000/api/accounts';
  
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
  editProduct(id) {
    return this
            .http
            .get(`${this.Url}/edit/${id}`);
  }
  updateProduct(name, email, password,date, id) {
    const obj = {
      name, email, password,date
    };
    this
      .http
      .post(`${this.Url}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  
  
  deleteProduct(id) {
    return this
              .http
              .get(`${this.Url}/delete/${id}`);
  }
  
}