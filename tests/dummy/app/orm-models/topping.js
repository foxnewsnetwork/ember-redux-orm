import { Model } from 'redux-orm';

export default class Topping extends Model {
  static get modelName() {
    return 'Topping';
  }

  static get fields() {
    return {
      // declare relational fields here

    };
  }

  static get dataFields() {
    return {
      // declare attribute fields here
      flavor: 'string'
    };
  }
}
