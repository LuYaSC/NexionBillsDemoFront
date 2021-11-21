export class GetBillDto {
  user: number;
  state: number;
  service: number;
  currency: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
