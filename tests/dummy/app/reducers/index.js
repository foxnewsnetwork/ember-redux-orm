import orm from '../orm-schema';
import { createReducer } from 'redux-orm';

export default {
  orm: createReducer(orm)
};
