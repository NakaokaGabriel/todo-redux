import { all } from 'redux-saga/effects';

import todo from './todo/Todo.sagas';

export default function* rootSaga(): any {
  return yield all([
    todo
  ]);
}
