import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BillService } from 'app/services/billing/bill.service';
import { CreateBillDto } from 'app/services/billing/models/create-bill-dto';
import { GetBillDto } from 'app/services/billing/models/get-bill-dto';
import { GetBillsResult } from 'app/services/billing/models/get-bills-result';
import { PayBillByIdDto } from 'app/services/billing/models/pay-bill-by-id';
import { PayBillDto } from 'app/services/billing/models/pay-bill-dto';
import { ParameterResult } from 'app/services/parameters/models/parameter-result';
import { ParameterService } from 'app/services/parameters/parameter.service';
import { UtilService } from 'app/services/util-service';
import { environment } from 'environments/environment';



@Component({
  moduleId: module.id,
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
  providers: [BillService, UtilService, ParameterService, NgbActiveModal]
})

export class BillsComponent implements OnInit {

  constructor(private service: BillService, private utilService: UtilService, private parameterService: ParameterService, private modal: NgbModal) { }

  billsList: GetBillsResult[];
  usersList: ParameterResult[];
  servicesList: ParameterResult[];
  coinsList: ParameterResult[];
  statesList: ParameterResult[];
  getListDto: GetBillDto = new GetBillDto({ user: 0, state: 0, service: 0, currency: 0 });
  isVisible = false;
  message: string;
  bill: any;
  massPayBill: PayBillDto = new PayBillDto();
  createBill: CreateBillDto =  new CreateBillDto();

  private urlServices = environment.url.services;
  private urlCoins = environment.url.coins;
  private urlStates = environment.url.states;
  private urlUsers = environment.url.users;

  ngOnInit() {
    this.getServices();
    this.chargeSelect();
  }

  openModal(content) {
    this.modal.open(content);
  }

  payModal(content, bill: GetBillsResult) {
    debugger
    this.bill = bill;
    this.modal.dismissAll
    this.modal.open(content);
  }

  payById() {
    this.service.payBillById(new PayBillByIdDto({ numberBill: this.bill.numberBill })).subscribe((resp: any) => {
      if (resp.isOk) {
        this.utilService.showNotifications('top', 'right', resp.body, 'success');
        this.modal.dismissAll();
        this.getServices();
      } else {
        this.utilService.showNotifications('top', 'right', resp.message, 'danger');
      }
    }, (error => {
      this.utilService.showNotifications('top', 'right', 'Can´t be Pay', 'danger');
    }))
  }

  validateResponse(resp: any) {
    if (resp.isOk) {
      this.ngOnInit();
      this.utilService.showNotifications('top', 'right', resp.body, 'success');
    } else {
      this.utilService.showNotifications('top', 'right', resp.message, 'danger');
    }
  }

  chargeSelect() {
    this.parameterService.getServices(this.urlServices).subscribe((resp: any) => {
      if (resp.isOk) {
        this.servicesList = resp.body.filter((x: ParameterResult) => !x.state);
      }
    });
    this.parameterService.getServices(this.urlCoins).subscribe((resp: any) => {
      if (resp.isOk) {
        this.coinsList = resp.body.filter((x: ParameterResult) => !x.state);
      }
    });
    this.parameterService.getServices(this.urlStates).subscribe((resp: any) => {
      if (resp.isOk) {
        this.statesList = resp.body.filter((x: ParameterResult) => !x.state);
      }
    });
    this.parameterService.getServices(this.urlUsers).subscribe((resp: any) => {
      if (resp.isOk) {
        this.usersList = resp.body.filter((x: ParameterResult) => !x.state);
      }
    });
  }

  getServices() {
    this.service.getBills(this.getListDto).subscribe((resp: any) => {
      if (resp.isOk) {
        this.isVisible = true;
        this.billsList = resp.body;
      } else {
        this.isVisible = false;
        this.message = resp.message.replace(',', '</br>');
        this.utilService.showNotifications('top', 'right', this.message, 'danger');
      }
    }, (error) => {
      this.isVisible = false;
      this.message = "services down please review";
      this.utilService.showNotifications('top', 'right', this.message, 'danger');
    });
  }

  selectUser($event: ParameterResult) {
    this.getListDto.user = $event.code;
    this.getServices();
  }

  selectService($event: ParameterResult) {
    this.getListDto.service = $event.code;
    this.getServices();
  }

  selectState($event: ParameterResult) {
    this.getListDto.state = $event.code;
    this.getServices();
  }

  selectCurrency($event: ParameterResult) {
    this.getListDto.currency = $event.code;
    this.getServices();
  }

  selectUserMassPay($event: ParameterResult) {
    this.massPayBill.user = $event.code;
  }

  selectServiceMassPay($event: ParameterResult) {
    this.massPayBill.serviceBill = $event.code;
  }

  selectCreateUser($event: ParameterResult){
    this.createBill.user = $event.code;
  }

  selectCreateService($event: ParameterResult){
    this.createBill.service = $event.code;
  }

  selectCreateCurrency($event: ParameterResult){
    this.createBill.currency = $event.code;
  }

  massPayBills() {
    if (this.massPayBill.dateBill === undefined || (this.massPayBill.dateBill.length < 6)) {
      this.utilService.showNotifications('top', 'right', "Date must be contain 6 or 7 characters", 'danger');
      return;
    }
    this.service.payBill(this.massPayBill).subscribe((resp: any) => {
      if (resp.isOk) {
        this.utilService.showNotifications('top', 'right', resp.body, 'success');
        this.modal.dismissAll();
        this.getServices();
        this.massPayBill = new PayBillDto();
      } else {
        this.utilService.showNotifications('top', 'right', resp.message, 'danger');
      }
    }, (error) => {
      this.utilService.showNotifications('top', 'right', "Can´t Pay, Please try again", 'danger');
    });
  }

  createBills() {
    if (this.createBill.number === undefined || (this.createBill.number < 1)) {
      this.utilService.showNotifications('top', 'right', "Number must be between 1 - 999", 'danger');
      return;
    }
    this.service.createBill(this.createBill).subscribe((resp: any) => {
      debugger;
      if (resp.isOk) {
        this.utilService.showNotifications('top', 'right', resp.body, 'success');
        this.modal.dismissAll();
        this.getServices();
        this.createBill = new CreateBillDto();
      } else {
        this.utilService.showNotifications('top', 'right', resp.message, 'danger');
      }
    }, (error) => {
      this.utilService.showNotifications('top', 'right', "Can´t Pay, Please try again", 'danger');
    });
  }

}
