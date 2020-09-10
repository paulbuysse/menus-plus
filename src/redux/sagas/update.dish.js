import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateDish(action) {
  try {
      console.log(action.payload);
      let response = yield axios.put(`/api/dish/${action.payload.dishId}`, action.payload);
      console.log(response.data);
    
      yield put({type: 'FETCH_DISHES'});
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}

function* updateDishSaga() {
  yield takeLatest('UPDATE_DISH', updateDish);
}

export default updateDishSaga;