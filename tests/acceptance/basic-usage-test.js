import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import { find } from 'dummy/orm-selectors/person';

const Maria = {
  id: 'maria',
  gender: false,
  weapon: 'rakuyo'
};

describe('Acceptance | basic usage', function() {
  let application, redux;

  before(function(done) {
    application = startApp();
    visit('/');
    andThen(function() {
      redux = application.__container__.lookup('service:redux');
      redux.dispatch({
        type: 'CREATE_PERSON',
        payload: Maria
      });
      done();
    });
  });

  after(function() {
    destroyApp(application);
  });

  it('can select', function() {
    const { orm } = redux.getState();
    const actual = find('maria')(orm);
    expect(actual).to.have.property('id', 'maria');
    expect(actual).to.have.property('weapon', 'rakuyo');
  });
});
