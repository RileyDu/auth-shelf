import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
  try {
    yield axios.delete(`/api/shelf/${action.payload}`); // tells the server to make DELETE request with item id
    yield put({
      type: 'FETCH_ITEMS' // rerender the list without the deleted item
    });
  } catch (error) {
    console.error('deleteItem error:', error);
  }
}

function* deleteItemSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
  }

export default deleteItemSaga;