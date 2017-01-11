import { ORM } from 'redux-orm';
import Taco from 'dummy/orm-models/taco';
import Person from 'dummy/orm-models/person';
import Protein from 'dummy/orm-models/protein';
import Topping from 'dummy/orm-models/topping';

const orm = new ORM();
orm.register(Taco, Person, Protein, Topping);

export default orm;
