import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import menuSaga from './menu.saga';
import currentMenuSaga from './current.menu';
import dishRemovalSaga from './dish.removal';
import dishSaga from './dish.saga';
import menuDishSaga from './menu.dish';
import updateDishSaga from './update.dish';
import deleteDish from './delete.dish';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    menuSaga(),
    currentMenuSaga(),
    dishRemovalSaga(),
    dishSaga(),
    menuDishSaga(),
    updateDishSaga(),
    deleteDish(),
  ]);
}
