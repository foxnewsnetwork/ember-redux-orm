import { Model  } from 'redux-orm';

export default class Protein extends Model {
  static get modelName() {
    return 'Protein';
  }

  static get fields() {
    return {
      // declare relational fields here

    };
  }

  static get dataFields() {
    return {
      // declare attribute fields here
      name: 'string'
    };
  }
}
