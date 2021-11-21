import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { CreateBillDto } from './models/create-bill-dto';
import { GetBillDto } from './models/get-bill-dto';
import { PayBillByIdDto } from './models/pay-bill-by-id';
import { PayBillDto } from './models/pay-bill-dto';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  constructor(public http: HttpClient) { }

  private baseUrl = environment.url.bills;

  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getBills(dto: GetBillDto) {
    return this.http.post(this.baseUrl + 'GetBills', dto, {headers: this.httpHeader});
  }

  getPayBills(dto: GetBillDto) {
    return this.http.post(this.baseUrl + 'GetPayBills', dto, {headers: this.httpHeader});
  }

  payBill(dto: PayBillDto) {
    return this.http.post(this.baseUrl + 'PayBill', dto, {headers: this.httpHeader});
  }

  payBillById(dto: PayBillByIdDto) {
    return this.http.post(this.baseUrl + 'PayBillById', dto, {headers: this.httpHeader});
  }

  createBill(dto: CreateBillDto) {
    return this.http.post(this.baseUrl + 'CreateBill', dto, {headers: this.httpHeader});
  }

}
