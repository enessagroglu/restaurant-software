import { Card, Modal, Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setTableOccupied, setTableEmpty } from '../store/TableSlice';

import masa1 from "../assets/numbers/1.png";
import masa2 from "../assets/numbers/2.png";
import masa3 from "../assets/numbers/3.png";
import masa4 from "../assets/numbers/4.png";
import masa5 from "../assets/numbers/5.png";
import masa6 from "../assets/numbers/6.png";
import masa7 from "../assets/numbers/7.png";
import masa8 from "../assets/numbers/8.png";
import masa9 from "../assets/numbers/9.png";
import masa10 from "../assets/numbers/10.png";

export default function Tables() {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables.tables); // Tabloları state'ten alıyoruz

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  const handleOpenModal = (tableNumber) => {
    setSelectedTable(tableNumber);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTable(null);
  };

  const handleTableOccupied = (tableNumber) => {
    dispatch(setTableOccupied({ tableNumber }));
  };

  const handleTableEmpty = (tableNumber) => {
    dispatch(setTableEmpty({ tableNumber }));
  };

  const tableImages = [
    masa1, masa2, masa3, masa4, masa5, masa6, masa7, masa8, masa9, masa10,
  ];

  return (
    <div>
      <h1>Masalar</h1>
      <div className="table-layout">
        {Object.keys(tables).map((tableKey, index) => (
          <Card
            key={tableKey}
            hoverable
            style={{ width: 200 }}
            cover={<img alt={`Masa ${index + 1}`} src={tableImages[index]} />}
            onClick={() => handleOpenModal(index + 1)}
          >
            <Meta title={`Masa ${index + 1}`} description={`Durum: ${tables[tableKey]}`} />
          </Card>
        ))}
      </div>

      <Modal
        title={`Masa ${selectedTable}`}
        open={isModalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Kapat
          </Button>,
        ]}
      >
        {selectedTable && (
          <div>
            <p>Durum: {tables[`status${selectedTable}`]}</p>
            <div className="modalButtonGroup">
              <Button type="primary" onClick={() => handleTableOccupied(selectedTable)}>Masa Dolu</Button>
              <Button type="primary" onClick={() => handleTableEmpty(selectedTable)}>Masa Boş</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
