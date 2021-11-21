export class CreateBillDto {
  user: number;
  currency: number;
  service: number;
  number: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
