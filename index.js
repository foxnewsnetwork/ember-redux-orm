/* jshint node: true */
'use strict';
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

const reduxOrm = new Funnel('node_modules/redux-orm/dist', {
  destDir: 'redux-orm',
  files: ['redux-orm.js', 'redux-orm.js.map']
});

module.exports = {
  name: 'ember-redux-orm',

  included(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    const vendor = this.treePaths.vendor;
    // requires ember-cli 2.9+
    // https://github.com/ember-cli/ember-cli/pull/5976
    app.import(vendor + '/redux-orm/redux-orm.js');
    app.import(vendor + '/redux-orm/redux-orm.js.map');
    app.import(vendor + '/shims/redux-orm.js');

    return app;
  },

  treeForVendor(vendorTree) {
    const trees = [reduxOrm];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    return mergeTrees(trees);
  }
};
