(function() {
  function vendorModule() {
    'use strict';

    return self['ReduxOrm'];
  }

  define('redux-orm', [], vendorModule);
})();
