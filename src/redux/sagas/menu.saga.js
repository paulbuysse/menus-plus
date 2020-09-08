import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMenu(action) {
  try {
      let response = yield axios.get(`/api/menu/${action.payload}`);
      console.log(response.data);
    
      yield put({type: 'SET_MENUS', payload: response.data});
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}

function* menuSaga() {
  yield takeLatest('FETCH_MENUS', fetchMenu);
}

export default menuSaga;