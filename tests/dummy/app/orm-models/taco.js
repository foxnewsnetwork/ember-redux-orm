import { Model , fk, many, oneToOne } from 'redux-orm';

export default class Taco extends Model {
  static get modelName() {
    return 'Taco';
  }

  static get fields() {
    return {
      // declare relational fields here
      filling: fk('Protein'),
      toppings: many('Topping'),
      eater: oneToOne('Person')
    };
  }

  static get dataFields() {
    return {
      // declare attribute fields here
      name: 'string',
      price: 'number',
      misc: null
    };
  }

  static reducer(state, action, Taco) {
    // Implement your reducer
    return Taco.getNextState();
  }
}
