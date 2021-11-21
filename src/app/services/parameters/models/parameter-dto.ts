export class ParameterDto {
  code: number;
  name: string;
  state: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
