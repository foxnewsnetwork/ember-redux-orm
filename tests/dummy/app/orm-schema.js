import { Schema } from 'redux-orm';
import Taco from 'dummy/orm-models/taco';
import Person from 'dummy/orm-models/person';
import Protein from 'dummy/orm-models/protein';
import Topping from 'dummy/orm-models/topping';

const schema = new Schema();
schema.register(Taco, Person, Protein, Topping);

export default schema;
