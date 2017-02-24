import { Model<%= otherImports.length ? ', ' + otherImports : '' %> } from 'redux-orm';

export default class <%= moduleName %> extends Model {
  static get modelName() {
    return '<%= moduleName %>';
  }

  static get fields() {
    return {
      /**
      * Attribute Fields
      */
    <%= attrs.length ? '  ' + attrs : '' %><%= attrs.length && fields.length ? ',' : '' %>
      /**
      * Relationship Fields
      */
    <%= fields.length ? '  ' + fields : '' %>
    };
  }
}
