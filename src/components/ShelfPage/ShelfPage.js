import React from 'react';

function ShelfPage() {
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
