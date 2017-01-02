import ORM from 'redux-orm';

export default class Taco extends ORM.Model {
  static get modelName() {
    return 'Taco';
  }

  static get fields() {
    return {
      // declare relational fields here
      filling: ORM.fk('Protein'),
      toppings: ORM.many('Topping'),
      eater: ORM.oneToOne('Person')
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
