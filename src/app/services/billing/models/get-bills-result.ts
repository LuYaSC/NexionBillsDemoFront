export class GetBillsResult {
  numberBill: number;
  userAssigned: string;
  currency: string;
  amount: number;
  stateBill: string;
  serviceBill: string;
  dateBill: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
