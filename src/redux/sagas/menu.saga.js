import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMenu(action) {
  try {
    let response = yield axios.get(`/api/menu/${action.payload}`);
    console.log(response.data);

    yield put({type: 'SET_MENUS', payload: response.data});
    //yield put({ type: 'SET_CURRENT_MENU', payload: response.data });
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}

function* createNewMenu(action) {
  try {
    console.log(action.payload);
    let response = yield axios.post(`/api/menu/new/m`, action.payload);
    console.log(response.data);

    //yield put({type: 'SET_MENUS', payload: response.data});
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}

function* deleteMenu(action) {
  try {
    console.log(action.payload);
    let response = yield axios.delete(`/api/menu/delete/${action.payload}`);
    console.log(response.data);

    //yield put({type: 'SET_MENUS', payload: response.data});
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}

function* setCurrentMenu(action) {
  try {
      let response = yield axios.get(`/api/current/menu/${action.payload}`);
      console.log(response.data);
    
      yield put({type: 'APPLY_CURRENT_MENU', payload: response.data});
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}


function* menuSaga() {
  yield takeLatest('FETCH_MENUS', fetchMenu);
  yield takeLatest('CREATE_NEW_MENU', createNewMenu);
  yield takeLatest('DELETE_MENU', deleteMenu);
  yield takeLatest('SET_CURRENT_MENU', setCurrentMenu);
}

export default menuSaga;