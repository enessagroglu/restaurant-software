import React from 'react';
import { Button } from 'antd';

const TableDetails = ({ tableNumber }) => {
  return (
    <div>
      <h2>Masa {tableNumber}</h2>
      <p>Bu masanın detayları burada gösterilecek.</p>
      <Button type="primary">Masayı Aç</Button>
      <Button type="default">Masayı Kapat</Button>
      <Button type="danger">Masayı Kullanıma Kapat</Button>
      <Button type="default">Masayı Kullanıma Aç</Button>
    </div>
  );
};

export default TableDetails;
