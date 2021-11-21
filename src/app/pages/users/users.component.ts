import { Component, OnInit } from '@angular/core';
import { ParameterDto } from 'app/services/parameters/models/parameter-dto';
import { ParameterResult } from 'app/services/parameters/models/parameter-result';
import { ParameterService } from 'app/services/parameters/parameter.service';
import { UtilService } from 'app/services/util-service';
import { environment } from 'environments/environment';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ParameterService, UtilService]
})
export class UsersComponent implements OnInit {
  constructor(private service: ParameterService, private utilService: UtilService) { }

  private url = environment.url.users;
  isVisible: boolean;

  usersList: ParameterResult[];

  ngOnInit() {
    this.getServices();
  }

  handleDelete($event: ParameterDto) {
    this.service.delete(this.url, $event).subscribe((resp: any) => {
      this.validateResponse(resp);
    }, (error) => {
      this.utilService.showNotifications('top', 'right', "services down please review", 'danger');
    });
  }

  handleUpdate($event: ParameterDto) {
    this.service.update(this.url, $event).subscribe((resp: any) => {
      this.validateResponse(resp);
    }, (error) => {
      this.utilService.showNotifications('top', 'right', "services down please review", 'danger');
    });
  }

  handleCreate($event: ParameterDto) {
    this.service.create(this.url, $event).subscribe((resp: any) => {
      this.validateResponse(resp);
    }, (error) => {
      this.utilService.showNotifications('top', 'right', "services down please review", 'danger');
    });
  }

  validateResponse(resp: any) {
    if (resp.isOk) {
      this.ngOnInit();
      this.utilService.showNotifications('top', 'right', resp.body, 'success');
    } else {
      this.utilService.showNotifications('top', 'right', resp.message, 'danger');
    }
  }

  getServices() {
    this.service.getServices(this.url).subscribe((resp: any) => {
      if (resp.isOk) {
        this.isVisible = true;
        this.usersList = resp.body;
      } else {
        this.isVisible = false;
      }
    }, (error) => {
      this.isVisible = false;
      this.utilService.showNotifications('top', 'right', "services down please review", 'danger');
    });
  }

}
