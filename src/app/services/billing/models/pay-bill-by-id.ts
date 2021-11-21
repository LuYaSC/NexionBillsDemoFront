export class PayBillByIdDto {
  numberBill: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
