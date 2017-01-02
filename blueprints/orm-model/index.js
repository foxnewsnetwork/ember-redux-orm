/* eslint-env node */

var inflection  = require('inflection');
var stringUtils = require('ember-cli-string-utils');
var EOL         = require('os').EOL;

// casually stolen from https://github.com/emberjs/data/blob/master/blueprints/model/index.js
module.exports = {
  description: 'Generates an redux-orm model.',

  anonymousOptions: [
    'name',
    'attr:type'
  ],

  locals: function(options) {
    var attrs = [];
    var fields = [];
    var needs = [];
    var moduleName = stringUtils.capitalize(stringUtils.camelize(options.entity.name));
    var entityOptions = options.entity.options;

    for (var name in entityOptions) {
      var type = entityOptions[name] || '';
      var foreignModel = name;
      if (type.indexOf(':') > -1) {
        foreignModel = type.split(':')[1];
        type = type.split(':')[0];
      }
      var dasherizedName = stringUtils.dasherize(name);
      var camelizedName = stringUtils.camelize(name);
      var dasherizedType = stringUtils.dasherize(type);
      var dasherizedForeignModel = stringUtils.dasherize(foreignModel);
      var camelizedForeignModel = inflection.camelize(foreignModel);
      var dasherizedForeignModelSingular = inflection.singularize(dasherizedForeignModel);
      var camelizedForeignModelSingular = inflection.singularize(camelizedForeignModel);

      var attr;
      if (/many/.test(dasherizedType)) {
        var camelizedNamePlural = inflection.pluralize(camelizedName);
        field = ormAttr(camelizedForeignModelSingular, dasherizedType);
        fields.push(camelizedNamePlural + ': ' + field);
      } else if (/fk/.test(dasherizedType)) {
        field = ormAttr(camelizedForeignModelSingular, dasherizedType);
        fields.push(camelizedName + ': ' + field);
      } else if (/one/.test(dasherizedType)){
        field = ormAttr(camelizedForeignModelSingular, dasherizedType);
        fields.push(camelizedName + ': ' + field);
      } else {
        attr = ormAttr(dasherizedName, dasherizedType);
        attrs.push(camelizedName + ': ' + attr);
      }

      if (/many|fk|one/.test(dasherizedType)) {
        needs.push("'model:" + dasherizedForeignModelSingular + "'");
      }
    }

    var needsDeduplicated = needs.filter(function(need, i) {
      return needs.indexOf(need) === i;
    });

    attrs = attrs.join(',' + EOL + '      ');
    fields = fields.join(',' + EOL + '      ');
    needs = '  needs: [' + needsDeduplicated.join(', ') + ']';

    return {
      moduleName: moduleName,
      attrs: attrs,
      fields: fields,
      needs: needs
    };
  }
};

function ormAttr(name, type) {
  var capName = stringUtils.capitalize(name);
  switch (type) {
  case 'fk':
    return 'ORM.fk(\'' + capName + '\')';
  case 'many':
    return 'ORM.many(\'' + capName + '\')';
  case 'one':
    return 'ORM.oneToOne(\'' + capName + '\')';
  case '':
    return 'null';
  default:
    return '\'' + type + '\'';
  }
}
