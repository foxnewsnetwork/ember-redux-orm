# ember-redux-orm

Front-end ORM? Yes please! Read about redux-orm here: https://github.com/tommikaikkonen/redux-orm

If you're rolling ember-redux, consider using this as an alternative to ember-data

## Usage
1. Declare your models
```sh
ember generate orm-model taco filling:fk:protein toppings:many:topping eater:one:person name:string price:number misc
```

2. Register them in a Schema
`app/orm-schema.js`
```javascript
import { Schema } from 'redux-orm';
import Taco from './orm-models/taco';

const schema = new Schema();
schema.register(Taco);

export default schema;
```

3. Register your reducer
`app/reducers/index.js`
```javascript
import schema from '../orm-schema';
import otherReducer from './other-reducer';

export default {
  orm: schema.reducer(),
  otherNamespace: otherReducer
};
```

4. Write your selector
```sh
ember g orm-selector taco
```
```javascript
import schema from '../orm-schema';

export function find(id) {
  return schema.createSelector(session => {
      return session.Taco.withId(id);
  });
}
```

5. Use your selector wherever it is you get getState
```javascript
import { find } from '../orm-selectors/taco';

const { orm } = redux.getState();
const taco = find('34')(orm);
```

## FAQ
Q: Do I really need an ORM?
A: If your application has persistent state, then the answer is always yes

Q: But I already have an ORM in my back-end server, why do I need it in the front-end?
A: Because ORMs make for stable and consistent software that will last. Just because it's already used elsewhere is no excuse to not use it again where it's appropriate, if anything, the fact it's already battle-tested is proof that it's good and should be reused

Q: What's wrong with ember-data
A: Nothing, it just doesn't plug into redux very well due to its mutability and the fact it couples async IO with the ORM, which necessarily means they have to churn a lot as they work to iron out state-management bugs and an ever-dynamic API set

Q: Can this be used concurrently with ember-data
A: Yes, everything is appended with `orm` for the purpose of avoiding collisons with ember-data's stuff

Q: What do I do for async IO?
A: Use redux-thunk or redux-saga in conjunction with ajax. Use normalizr if you require data serialization / normalization from your upstream source

## Installation

* `git clone <repository-url>` this repository
* `cd ember-redux-orm`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
