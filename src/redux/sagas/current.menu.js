import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* setCurrentMenu(action) {
  try {
      let response = yield axios.get(`/api/current/menu/${action.payload.id}`);
      console.log(response.data);
    
      yield put({type: 'APPLY_CURRENT_MENU', payload: response.data});
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}

function* currentMenuSaga() {
  yield takeLatest('SET_CURRENT_MENU', setCurrentMenu);
}

export default currentMenuSaga;