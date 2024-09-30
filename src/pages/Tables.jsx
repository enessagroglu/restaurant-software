import { Card, Modal, Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { setTableOccupied, setTableEmpty, setTableClosed, setTableReopened } from '../store/Tables';
import { useState } from 'react';

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
  const tables = useSelector((state) => state.tables);

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

  const tableData = [
    { img: masa1, title: "Masa 1", status: tables.status1 },
    { img: masa2, title: "Masa 2", status: tables.status2 },
    { img: masa3, title: "Masa 3", status: tables.status3 },
    { img: masa4, title: "Masa 4", status: tables.status4 },
    { img: masa5, title: "Masa 5", status: tables.status5 },
    { img: masa6, title: "Masa 6", status: tables.status6 },
    { img: masa7, title: "Masa 7", status: tables.status7 },
    { img: masa8, title: "Masa 8", status: tables.status8 },
    { img: masa9, title: "Masa 9", status: tables.status9 },
    { img: masa10, title: "Masa 10", status: tables.status10 },
  ];

  return (
    <div>
      <h1>Masalar</h1>
      <div className="table-layout">
        {tableData.map((table, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 200 }}
            cover={<img alt={table.title} src={table.img} />}
            onClick={() => handleOpenModal(index + 1)}
          >
            <Meta title={table.title} description={`status: ${table.status}`} />
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
            <p>Masa {selectedTable} bilgileri burada görüntülenebilir.</p>
            <p>Durum: {tables[`status${selectedTable}`]}</p>
            
          </div>
        )}
      </Modal>
    </div>
  );
}
