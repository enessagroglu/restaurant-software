import React, { useState, useRef } from "react";
import imgLogo from "../../assets/butterfly_logo.png";
import { useDispatch } from "react-redux";
import { setOperation } from "../../store/MenuOperationsSlice";
import axios from "axios";
import { Button, Form, Input, Select, message, Space } from "antd";
import { EndPoints } from "../../Helpers/EndPoints";

const { TextArea } = Input;

export default function AddMenuItem() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [group, setGroup] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const fileInputRef = useRef(null);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Yemek başarıyla eklendi",
    });
  };
  const failed = () => {
    messageApi.open({
      type: "error",
      content: "Hata oluştu",
    });
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    // Kullanıcı girdisini filtreliyoruz, yalnızca rakam, nokta ve virgül izin veriyoruz
    const regex = /^[0-9]*[.,]?[0-9]*$/;
    if (regex.test(value)) {
      setPrice(value); // Giriş geçerli ise state'i güncelle
    }
  };

  const handleAdd = async () => {
    setLoading(true);
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("group", group);
    formData.append("ingredients", ingredients);
  
    // Fiyatı virgülden noktaya çevirme
    const cleanPrice = price.replace(",", ".");
    formData.append("price", cleanPrice);
  
    if (image) {
      formData.append("image", image);
    }
  
    // FormData içeriğini loglama
    formData.forEach((value, key) => {
      console.log(key, value);
    });
  
    try {
      const response = await axios.post(
        EndPoints.ApiBase.API_BASE_URL + EndPoints.Menu.POST_MENU_ITEM,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      success();
      console.log("Yemek başarıyla eklendi:", response.data);
    } catch (error) {
      setLoading(false);
      failed();
      console.error("Yemek ekleme hatası:", error);
    }
  };
  

  return (
    <>
      {contextHolder}
      <div className="menu-item-ekle-container">
          <div className="menu-item-ekle">
            <div className="center-container">
              <img src={imgLogo} alt="logo" className="logo-menu" />
            </div>
            <div className="center-container">
              <h1>Menüye Ekle</h1>
            </div>

            <Form form={form} layout="vertical">
              <Form.Item label="Yemek Adı" required>
                <Input
                  placeholder="yemek adı yazın"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Açıklama">
                <Input
                  placeholder="Açıklama yazın"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Grup" required>
                <Select
                  showSearch
                  placeholder="Grup Seçin"
                  onChange={(e) => setGroup(e)}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "acik-pide",
                      label: "Açık Pide",
                    },
                    {
                      value: "kapali-pide",
                      label: "Kapalı Pide",
                    },
                    {
                      value: "yuvarlak-pide",
                      label: "Yuvarlak Pide",
                    },
                    {
                      value: "salata",
                      label: "Salata",
                    },
                    {
                      value: "tatli",
                      label: "Tatlı",
                    },
                    {
                      value: "icecek",
                      label: "İçecek",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Görsel" required>
                <label
                  className="custom-upload-btn"
                  onClick={() => fileInputRef.current.click()}
                >
                  Dosya Yükle
                </label>
                <input
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item label="İçindekiler">
                  <TextArea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="içindekiler"
                    autoSize={{
                      minRows: 3,
                      maxRows: 5,
                    }}
                  />
                </Form.Item>
              </Form.Item>

              <Form.Item label="Fiyat" required>
                <Input
                  value={price} // String olarak state'de tutuyoruz
                  onChange={handlePriceChange} // Girdi kontrolü
                  placeholder="Fiyatı girin"
                />
              </Form.Item>

              <div className="" style={{ display: "flex" }}>
                <Button
                  style={{ width: "50%", marginRight: "20px" }}
                  type="primary"
                  onClick={() => handleAdd()}
                >
                  Ekle
                </Button>
                <Button
                  style={{ width: "50%", marginRight: "20px" }}
                  type="primary"
                  onClick={() => dispatch(setOperation("empty"))}
                >
                  geri
                </Button>
              </div>
            </Form>
          </div>
      </div>
    </>
  );
}
