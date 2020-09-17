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
        //payload is new dish info (name, price, img, description)
        let response = yield axios.post(`/api/dish`, action.payload);
        console.log(response.data);
      
        yield put({type: 'FETCH_DISHES'})
    } catch (error) {
      console.log('Dish get request failed', error);
    }
  }

  function* deleteDish(action) {
    try {
        let response = yield axios.delete(`/api/dish/delete/${action.payload}`);
        console.log(response);
      
        yield put({type: 'FETCH_DISHES'});
    } catch (error) {
      console.log('Menu get request failed', error);
    }
  }

  function* removeDishFromMenu(action) {
    try {
        let response = yield axios.delete(`/api/dish/${action.payload.removeId}`);
        console.log(response);
      
        //this.props.dispatch({type: 'SET_CURRENT_MENU', payload: this.props.match.params.id})
        yield put({type: 'SET_CURRENT_MENU', payload: action.payload.menuId})
    } catch (error) {
      console.log('Menu get request failed', error);
    }
  }

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

function* dishSaga() {
  yield takeLatest('FETCH_DISHES', fetchDishes);
  yield takeLatest('ADD_NEW_DISH', createDish);
  yield takeLatest('DELETE_DISH', deleteDish);
  yield takeLatest('REMOVE_DISH', removeDishFromMenu);
  yield takeLatest('UPDATE_DISH', updateDish);
}

export default dishSaga;