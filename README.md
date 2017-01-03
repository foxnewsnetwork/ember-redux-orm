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
