import menuItems from "./menuItems";
import { Divider } from 'antd';

export default function RestaurantMenu() {

  const groupTitles = {
    "kapali-pide": "Kapalı Pideler",
    "acik-pide": "Açık Pideler",
    "yuvarlak-pide": "Yuvarlak Pideler",
    salata: "Salatalar",
    icecek: "İçecekler",
  };

  const groupBy = (items, key) => {
    return items.reduce((result, item) => {
      (result[item[key]] = result[item[key]] || []).push(item);
      return result;
    }, {});
  };

  const groupedMenuItems = groupBy(menuItems, "group");

  return (
    <>
      <div>
        <h1 style={{display:"flex", justifyContent:"center"}}>Menü</h1>
        {Object.keys(groupedMenuItems).map((group, index) => (
          <div key={index} className="menu-group">
            {/* Eğer başlık eşlemesinde grup varsa onu kullan, yoksa grup adını göster */}
            <h2>{groupTitles[group] || group.replace("-", " ").toUpperCase()}</h2> 
            <Divider />
            <div className="menu-container">
              {groupedMenuItems[group].map((item, index) => (
                <div key={index} className="menu-item">
                  <h3 style={{color:"#15499c"}}>{item.name}</h3>
                  <img className="menu-img" src={item.image} alt={item.name} />
                  <p>{item.description}</p>
                  <p>Fiyat: {item.price} TL</p>
                  
                  {/* Eğer group "icecek" değilse, içindekiler kısmını göster */}
                  {item.group !== "icecek" && <p>İçindekiler: {item.ingredients}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
