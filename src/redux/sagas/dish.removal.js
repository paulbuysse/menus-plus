import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

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

function* dishRemovalSaga() {
  yield takeLatest('REMOVE_DISH', removeDishFromMenu);
}

export default dishRemovalSaga;