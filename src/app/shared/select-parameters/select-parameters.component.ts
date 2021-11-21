import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParameterResult } from 'app/services/parameters/models/parameter-result';

@Component({
  selector: 'app-select-parameters',
  templateUrl: './select-parameters.component.html',
  styleUrls: ['./select-parameters.component.css'],
})
export class SelectParametersComponent implements OnInit {

  @Input() title: string;
  @Input() disabled: boolean = false;
  @Input() parameterList: ParameterResult[];
  row: any;
  parameter: ParameterResult;
  @Output() onRowChange = new EventEmitter<ParameterResult>();

  constructor() {
  }

  ngOnInit(): void {
    if (this.disabled) {
      this.row = this.parameterList[0];
      this.onRowChange.emit(this.row);
    } else {
      this.row = 0;
    }
  }

  selectParameter() {
    this.parameter = this.row === "0" ? new ParameterResult({ code: 0, name: "All" }) : this.row;
    this.onRowChange.emit(this.parameter);
  }
}
