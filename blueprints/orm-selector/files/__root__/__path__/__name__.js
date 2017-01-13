import { createSelector } from 'redux-orm';
import orm from '../orm';

export default createSelector(orm, session => {
    return session;
});
