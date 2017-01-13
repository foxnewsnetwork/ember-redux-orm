/*jshint node:true*/
module.exports = {
  description: 'Installation blueprints for redux-orm',

  normalizeEntityName() {},

  afterInstall() {
    return this.addPackagesToProject([
      {name: 'redux-orm', target: '^0.9.0-rc.3'}
    ]);
  }
};
