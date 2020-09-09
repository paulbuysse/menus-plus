import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* removeDishFromMenu(action) {
  try {
      let response = yield axios.delete(`/api/dish/${action.payload}`);
      console.log(response);
    
      //yield put({type: 'FETCH_MENUS'});
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}

function* dishRemovalSaga() {
  yield takeLatest('REMOVE_DISH', removeDishFromMenu);
}

export default dishRemovalSaga;