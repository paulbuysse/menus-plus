import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchDishes(action) {
  try {
      let response = yield axios.get(`/api/dish`);
      console.log(response.data);
    
      yield put({type: 'SET_DISHES', payload: response.data});
  } catch (error) {
    console.log('Dish get request failed', error);
  }
}

function* createDish(action) {
    try {
        let response = yield axios.post(`/api/dish`, action.payload);
        console.log(response.data);
      
        yield put({type: 'FETCH_DISHES'})
    } catch (error) {
      console.log('Dish get request failed', error);
    }
  }

function* dishSaga() {
  yield takeLatest('FETCH_DISHES', fetchDishes);
  yield takeLatest('ADD_NEW_DISH', createDish);
}

export default dishSaga;