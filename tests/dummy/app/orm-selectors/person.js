import orm from '../orm-schema';

export const find = (id) => (state) => orm.session(state).Person.withId(id);
