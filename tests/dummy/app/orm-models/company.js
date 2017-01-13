import { Model, many, fk, oneToOne, attr } from 'redux-orm';

export default class Company extends Model {
  static get modelName() {
    return 'Company';
  }

  static get fields() {
    return {
      /**
      * Attribute Fields
      */
      name: attr({ type: 'string' }),
      s3filing: attr(),
      missionStatement: attr({ type: 'string' }),
      /**
      * Relationship Fields
      */
      employees: many('Person'),
      chairman: fk('Person'),
      ceo: oneToOne('Person')
    };
  }
}
