import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // tslint:disable-next-line:variable-name
  _url = 'http://localhost:3000/enroll';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  register(userData) {
    return this._http.post<any>(this._url, userData);
  }
}
