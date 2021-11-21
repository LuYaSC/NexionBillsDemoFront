import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ParameterDto } from 'app/services/parameters/models/parameter-dto';
import { ParameterResult } from 'app/services/parameters/models/parameter-result';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table-parameters',
  templateUrl: './table-parameters.component.html',
  styleUrls: ['./table-parameters.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class TableParametersComponent implements OnInit {

  @Input() title: string;
  @Input() isVisible: boolean;
  @Input() parametersList: ParameterResult[];
  @Output() onRowChangeCreate = new EventEmitter<ParameterDto>();
  @Output() onRowChangeUpdate = new EventEmitter<ParameterDto>();
  @Output() onRowChangeDelete = new EventEmitter<ParameterDto>();
  data: ParameterResult;
  flag: boolean;
  description: string;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  handleCreateOrUpdate(): void {
    this.flag ? this.onRowChangeCreate.emit(new ParameterDto({ name: this.description }))
      : this.onRowChangeUpdate.emit(new ParameterDto({ name: this.description, code: this.data.code }));
    this.modalService.dismissAll();
  }

  handleDelete(dto: ParameterResult) {
    this.onRowChangeDelete.emit(new ParameterDto({ code: dto.code, state: !dto.state }));
  }

  createOrEdit(content, flag: boolean, data: ParameterResult = new ParameterResult()) {
    this.flag = flag;
    this.data = flag ? new ParameterResult() : data;
    this.description = this.data.name;
    this.modalService.open(content);
  }
}
