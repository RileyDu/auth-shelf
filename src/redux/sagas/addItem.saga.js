import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* addItem(action){
  try {
    yield axios.post('/api/shelf', action.payload);
    yield put({type: 'FETCH_ITEMS'})
  } catch (error) {
    console.error(error);
  }
  
}

function* addItemSaga() {
    yield takeLatest('ADD_ITEM', addItem);
  }

export default addItemSaga;