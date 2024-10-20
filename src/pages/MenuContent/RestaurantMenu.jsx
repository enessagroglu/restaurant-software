import { Divider } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { EndPoints } from "../../Helpers/EndPoints";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

export default function RestaurantMenu() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const groupTitles = {
    "kapali-pide": "Kapalı Pideler",
    "acik-pide": "Açık Pideler",
    "yuvarlak-pide": "Yuvarlak Pideler",
    salata: "Salatalar",
    icecek: "İçecekler",
  };

  // Verileri gruplayan fonksiyon
  const groupBy = (items, key) => {
    return items.reduce((result, item) => {
      (result[item[key]] = result[item[key]] || []).push(item);
      return result;
    }, {});
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          EndPoints.ApiBase.API_BASE_URL + EndPoints.Menu.GET_MENU
        );
        setData(response.data);
        console.log(response);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div>
        <Flex style={{ justifyContent: "center" }} align="center" gap="middle">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 70 }} spin />} />
        </Flex>
      </div> 
    );
  if (error) return <div>Hata: {error.message}</div>;

  const groupedMenuItems = groupBy(data, "group");

  return (
    <>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Menü</h1>
        {Object.keys(groupedMenuItems).map((group, index) => (
          <div key={index} className="menu-group">
            {/* Eğer başlık eşlemesinde grup varsa onu kullan, yoksa grup adını göster */}
            <h2>
              {groupTitles[group] || group.replace("-", " ").toUpperCase()}
            </h2>
            <Divider />
            <div className="menu-container">
              {groupedMenuItems[group].map((item, index) => (
                <div key={index} className="menu-item">
                  <h3 style={{ color: "#15499c" }}>{item.name}</h3>
                  <img className="menu-img" src={item.image} alt={item.name} />
                  <p>{item.description}</p>
                  <p>Fiyat: {item.price} TL</p>

                  {/* Eğer group "icecek" değilse, içindekiler kısmını göster */}
                  {item.group !== "icecek" && (
                    <p>İçindekiler: {item.ingredients}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
