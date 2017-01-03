import schema from '../orm-schema';

export function find(id) {
  return schema.createSelector(session => {
      return session.Person.withId(id);
  });
}
