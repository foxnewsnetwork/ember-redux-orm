import { Model } from 'redux-orm';

export default class Person extends Model {
  static get modelName() {
    return 'Person';
  }

  static get fields() {
    return {
      // declare relational fields here

    };
  }

  static get dataFields() {
    return {
      // declare attribute fields here
      gender: 'boolean'
    };
  }

  static reducer(action, Person) {
    if(action.type === 'CREATE_PERSON') {
      Person.create(action.payload);
    }
  }
}
