import React from 'react';

const VoucherList = ({ vouchers }) => {
  return (
    <div>
      <h3>All Vouchers</h3>
      <ul>
        {vouchers.map((voucher) => (
          <li key={voucher._id}>
            {voucher.date} - {voucher.currency} - {voucher.exchangeRate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoucherList;

