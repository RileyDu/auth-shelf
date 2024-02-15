import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function ShelfPage() {
  const items = useSelector((store) => store.items);
  const dispatch = useDispatch();
  // const params = useParams();

  useEffect(() => {
    dispatch({ type: "FETCH_ITEMS" });
  }, []);

  function deleteItem(item) {
    //delete button triggers this and sends a DELETE request to db w/id
    console.log('item.id:', item.id);
    dispatch({
      type: "DELETE_ITEM",
      payload: item.id,
    });
  }

  return (
    <div className="container">
      <h2>Add Item</h2>
      <form>
        <input placeholder="Item Name" type="text" />
        <input placeholder="Item URL" type="url" />
        <button>SUBMIT ITEM</button>
      </form>
      <h2>Shelf</h2>
      <ul>
        {items.map((item , i) => (
          <li>
            <img key={i} src={item.image_url}></img>
            <p>{item.description}</p>
            <button onClick={() => deleteItem(item)}> DELETE </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
