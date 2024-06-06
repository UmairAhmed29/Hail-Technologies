import React, { useState } from 'react';

const VoucherForm = ({ setVouchers }) => {
  const [date, setDate] = useState('');
  const [currency, setCurrency] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');
  const [items, setItems] = useState([{ description: '', price: '', type: 'debit' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVoucher = { date, currency, exchangeRate, items };

    fetch('http://localhost:5000/api/vouchers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newVoucher),
    })
      .then((response) => response.json())
      .then((data) => setVouchers((prev) => [...prev, data]));
  };

  const addItem = () => {
    setItems([...items, { description: '', price: '', type: 'debit' }]);
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input
        
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ width: '200px' }}
        required
      />
      <input
        
        type="text"
        placeholder="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        style={{ width: '300px' }}
        required
      />
      <input
        type="number"
        placeholder="Exchange Rate"
        value={exchangeRate}
        onChange={(e) => setExchangeRate(e.target.value)}
        style={{ width: '300px' }}
        required
      />
      {items.map((item, index) => (
        <div key={index} >
          <input
            type="text"
            placeholder="Description"
            value={item.description}
            onChange={(e) => {
              const newItems = [...items];
              newItems[index].description = e.target.value;
              setItems(newItems);
            }}
            style={{ width: '300px' }}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={item.price}
            onChange={(e) => {
              const newItems = [...items];
              newItems[index].price = e.target.value;
              setItems(newItems);
            }}
            style={{ width: '300px' }}
            required
          />
          <select
            value={item.type}
            onChange={(e) => {
              const newItems = [...items];
              newItems[index].type = e.target.value;
              setItems(newItems);
            }}
          >
            <option value="debit">Debit</option>
            <option value="credit">Credit</option>
          </select>
        </div>
      ))}
      <button type="button" onClick={addItem}>Add Item</button>
      <button type="submit">Save Voucher</button>
    </form>
  );
};

export default VoucherForm;
