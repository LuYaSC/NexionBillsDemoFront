import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ParameterDto } from './models/parameter-dto';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor(public http: HttpClient) { }

  private baseUrl = environment.url.services;

  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getServices(url: string) {
    return this.http.get(url + 'Get');
  }

  create(url: string, dto: ParameterDto) {
    return this.http.post(url + 'Create', dto, {headers: this.httpHeader});
  }

  update(url: string, dto: ParameterDto) {
    return this.http.post(url + 'Update', dto, {headers: this.httpHeader});
  }

  delete(url: string, dto: ParameterDto) {
    return this.http.post(url + 'Delete', dto, {headers: this.httpHeader});
  }
}
