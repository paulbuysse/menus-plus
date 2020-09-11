import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addToMenu(action) {
  try {
      console.log(action.payload)
      let response = yield axios.post(`/api/menu/${action.payload.menu_id}`, action.payload);
      console.log(response.data);
    
      yield put({type: 'SET_CURRENT_MENU'});
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}

function* menuDishSaga() {
  yield takeLatest('ADD_TO_MENU', addToMenu);
}

export default menuDishSaga;