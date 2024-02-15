function* getItems(){

}

function* getItemsSaga() {
    yield takeLatest('GET_ITEMS', getItems);
  }

export default getItemsSaga;