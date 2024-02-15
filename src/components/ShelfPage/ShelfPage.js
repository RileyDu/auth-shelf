import React from 'react';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function ShelfPage() {
  const items = useSelector((store) => store.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_ITEMS" });
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ul>
      {items.map((item) => (
              <li>
                <img src={item.image_url}></img>
                <p>{item.description}</p>
                <button> DELETE </button>
              </li>
              // maps thru the movies array from the store
              // list item was used to allow componetitization 
            ))}
      </ul>
      <h2>Add Item</h2>
      <form>
        <input placeholder='Item Name' type='text'/>
        <input placeholder='Item URL' type='url'/>
        <button>SUBMIT ITEM</button>
      </form>
    </div>
  );
}

export default ShelfPage;
