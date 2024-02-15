import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getItems(){
    try {
        // Get the movies:
        const itemsResponse = yield axios.get('/api/shelf');
        // Set the value of the movies reducer:
        yield put({
          type: 'SET_ITEMS',
          payload: itemsResponse.data
        });
      } catch (error) {
        console.error('getItems error:', error);
      }
}



function* getItemsSaga() {
    yield takeLatest('FETCH_ITEMS', getItems);
  }

export default getItemsSaga;