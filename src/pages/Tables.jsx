import { Card } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { setTableOccupied, setTableEmpty, setTableClosed, setTableReopened } from '../store/Tables';

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

  const handleSetOccupied = (tableNumber) => {
    dispatch(setTableOccupied({ tableNumber }));
  };

  const handleSetEmpty = (tableNumber) => {
    dispatch(setTableEmpty({ tableNumber }));
  };

  const handleSetClosed = (tableNumber) => {
    dispatch(setTableClosed({ tableNumber }));
  };

  const handleReopenTable = (tableNumber) => {
    dispatch(setTableReopened({ tableNumber }));
  };


  return (
    <div>
      <h1>Masalar</h1>

      <div className="table-layout">
        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa1" src={masa1} />}
        >
          <Meta title="Masa 1" description={`status: ${tables.status1}`} />
          
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa2" src={masa2} />}
        >
          <Meta title="Masa 2" description={`status: ${tables.status2}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa3" src={masa3} />}
        >
          <Meta title="Masa 3" description={`status: ${tables.status3}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa4" src={masa4} />}
        >
          <Meta title="Masa 4" description={`status: ${tables.status4}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa5" src={masa5} />}
        >
          <Meta title="Masa 5" description={`status: ${tables.status5}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa6" src={masa6} />}
        >
          <Meta title="Masa 6" description={`status: ${tables.status6}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa7" src={masa7} />}
        >
          <Meta title="Masa 7" description={`status: ${tables.status7}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa8" src={masa8} />}
        >
          <Meta title="Masa 8" description={`status: ${tables.status8}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa9" src={masa9} />}
        >
          <Meta title="Masa 9" description={`status: ${tables.status9}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa10" src={masa10} />}
        >
          <Meta title="Masa 10" description={`status: ${tables.status10}`} />
        </Card>
      </div>
    </div>
  );
}
