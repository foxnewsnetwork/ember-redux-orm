import { Model <%= otherImports.length ? ', ' + otherImports : '' %> } from 'redux-orm';

export default class <%= moduleName %> extends Model {
  static get modelName() {
    return '<%= moduleName %>';
  }

  static get fields() {
    return {
      // declare relational fields here
    <%= fields.length ? '  ' + fields : '' %>
    };
  }

  static get dataFields() {
    return {
      // declare attribute fields here
    <%= attrs.length ? '  ' + attrs : '' %>
    };
  }

  static reducer(state, action, <%= moduleName %>) {
    // Implement your reducer
    return <%= moduleName %>.getNextState();
  }
}
