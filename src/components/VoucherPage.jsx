import React, { useState, useEffect } from 'react';
import VoucherForm from './VoucherForm.jsx';
import VoucherList from './VoucherList.jsx';

const VoucherPage = () => {
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/vouchers')
      .then((response) => response.json())
      .then((data) => setVouchers(data));
  }, []);

  return (
    <div align={"center"}>
      <h2>Vouchers</h2>
      <VoucherForm setVouchers={setVouchers} />
      <VoucherList vouchers={vouchers} />
    </div>
  );
};

export default VoucherPage;
