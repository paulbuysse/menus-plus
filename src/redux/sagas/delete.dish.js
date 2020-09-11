import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteDish(action) {
  try {
      let response = yield axios.delete(`/api/dish/delete/${action.payload}`);
      console.log(response);
    
      yield put({type: 'FETCH_DISHES'});
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}

function* deleteDishSaga() {
  yield takeLatest('DELETE_DISH', deleteDish);
}

export default deleteDishSaga;