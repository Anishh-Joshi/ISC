// BucketPackingPage.js
import React, { useState } from 'react';

function BucketPackingPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const availableItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 },
    // Add more items as needed
  ];

  const addToBucket = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const removeFromBucket = (item) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
    setSelectedItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="h-screen flex w-[100%]">

      <div className='flex-1 bg-c-secondary w-full'>
        <h1 className="text-2xl font-bold mb-4">Bucket Packing</h1>

        <div className="flex justify-between">
          <div className="w-1/2 p-4">
            <h2 className="text-lg font-bold mb-2">Available Items</h2>
            <ul>
              {availableItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-2">
                  {item.name} - ${item.price}
                  <button
                    onClick={() => addToBucket(item)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
      <div className='flex-1 bg-c-primary w-full'>
      <div className="w-1/2 p-4">
          <h2 className="text-lg font-bold mb-2">Your Bucket</h2>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                {item.name} - ${item.price}
                <button
                  onClick={() => removeFromBucket(item)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="font-bold mt-4">Total Price: ${calculateTotalPrice()}</p>
        </div>
      </div>
    </div>
  );
}

export default BucketPackingPage;
