import { put, takeLatest } from 'redux-saga/effects';


function* deleteItem(){

}

function* deleteItemSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
  }

export default deleteItemSaga;