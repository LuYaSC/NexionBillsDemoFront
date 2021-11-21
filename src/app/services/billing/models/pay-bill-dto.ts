export class PayBillDto {
  user: number;
  serviceBill: number;
  dateBill: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
