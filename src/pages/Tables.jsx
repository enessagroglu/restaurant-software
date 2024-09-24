import { Card } from "antd";
import { useState } from "react";
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
  const [durum1, setDurum1] = useState("kapalı");
  const [durum2, setDurum2] = useState("kapalı");
  const [durum3, setDurum3] = useState("kapalı");
  const [durum4, setDurum4] = useState("kapalı");
  const [durum5, setDurum5] = useState("kapalı");
  const [durum6, setDurum6] = useState("kapalı");
  const [durum7, setDurum7] = useState("kapalı");
  const [durum8, setDurum8] = useState("kapalı");
  const [durum9, setDurum9] = useState("kapalı");
  const [durum10, setDurum10] = useState("kapalı");

  return (
    <div>
      <h1>Masalar</h1>

      <div className="table-layout">
        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa1" src={masa1} />}
        >
          <Meta title="Masa 1" description={`durum: ${durum1}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa2" src={masa2} />}
        >
          <Meta title="Masa 2" description={`durum: ${durum2}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa3" src={masa3} />}
        >
          <Meta title="Masa 3" description={`durum: ${durum3}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa4" src={masa4} />}
        >
          <Meta title="Masa 4" description={`durum: ${durum4}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa5" src={masa5} />}
        >
          <Meta title="Masa 5" description={`durum: ${durum5}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa6" src={masa6} />}
        >
          <Meta title="Masa 6" description={`durum: ${durum6}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa7" src={masa7} />}
        >
          <Meta title="Masa 7" description={`durum: ${durum7}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa8" src={masa8} />}
        >
          <Meta title="Masa 8" description={`durum: ${durum8}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa9" src={masa9} />}
        >
          <Meta title="Masa 9" description={`durum: ${durum9}`} />
        </Card>

        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="masa10" src={masa10} />}
        >
          <Meta title="Masa 10" description={`durum: ${durum10}`} />
        </Card>
      </div>
    </div>
  );
}
