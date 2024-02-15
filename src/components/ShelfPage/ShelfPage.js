import React from 'react';
import { useSelector } from "react-redux";


function ShelfPage() {
  const items = useSelector((store) => store.items);

  useEffect(() => {
    dispatch({ type: "FETCH_ITEMS" });
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ul>
        <li> AN ITEM PLACEHOLDER 
          {/* items.map */}
        </li>
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
