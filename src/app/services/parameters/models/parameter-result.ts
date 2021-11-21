export class ParameterResult {
  code: number;
  name: string;
  dateCreation: string;
  dateModification: string;
  stateDescription: string;
  state: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
