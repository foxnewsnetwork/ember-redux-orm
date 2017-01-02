<grey>You may generate models with as many attrs as you would like to pass. The following attribute types are supported:</grey>
  <yellow><attr-name></yellow>
  <yellow><attr-name></yellow>:array
  <yellow><attr-name></yellow>:boolean
  <yellow><attr-name></yellow>:date
  <yellow><attr-name></yellow>:object
  <yellow><attr-name></yellow>:number
  <yellow><attr-name></yellow>:string
  <yellow><attr-name></yellow>:your-custom-transform
  <yellow><attr-name></yellow>:fk:<yellow><model-name></yellow>
  <yellow><attr-name></yellow>:many:<yellow><model-name></yellow>
  <yellow><attr-name></yellow>:one:<yellow><model-name></yellow>

For instance: <green>\`ember generate orm-model taco filling:fk:protein toppings:many:topping eater:one:person name:string price:number misc\`</green>
would result in the following model:

```js
import { Model, fk, oneToOne, many } from 'redux-orm';

export default class Taco extends Model {
  static get modelName() {
    return 'Taco';
  }
  static get fields() {
    return {
      fillings: fk('Protein'),
      toppings: many('Topping'),
      eater: oneToOne('Person')
    };
  }
  static get dataFields() {
    return {
      name: 'string',
      price: 'number',
      misc: null
    };
  }
}
```
