/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-redux-orm',

  options: {
    nodeAssets: {
      'redux-orm': {
        srcDir: 'dist',
        import: ['redux-orm.js', 'redux-orm.js.map']
      }
    }
  },

  included(app) {
    this._super.included.apply(this, arguments);

    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    this.app = app
    const vendor = this.treePaths.vendor;

    app.import(vendor + '/shims/redux-orm.js');
    return app;
  }
};
