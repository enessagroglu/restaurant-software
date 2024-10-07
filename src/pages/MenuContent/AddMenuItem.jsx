import React, { useState } from "react";
import imgLogo from "../../assets/butterfly_logo.png";
import { useDispatch } from "react-redux";
import { setOperation } from "../../store/MenuOperationsSlice";
import {
  Button,
  Form,
  Input,
  Select,
  message,
  Upload,
  InputNumber,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function AddMenuItem() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

  const props = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <div className="menu-item-ekle-container">
        <div className="menu-item-ekle">
          <div className="">
            <div  className="center-container">
              <img src={imgLogo} alt="logo" className="logo-menu" />
              
            </div>
            <div className="center-container">
            <h1>Menüye Ekle</h1>
            </div>
          </div>

          <Form form={form} layout="vertical">
            <Form.Item label="Yemek Adı" required>
              <Input placeholder="yemek adı yazın" />
            </Form.Item>
            <Form.Item label="Açıklama">
              <Input placeholder="Açıklama yazın" />
            </Form.Item>
            <Form.Item label="Grup" required>
              <Select
                showSearch
                placeholder="Grup Seçin"
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
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Görsel Yükleyin</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Form.Item label="İçindekiler">
                <TextArea
                  value={""}
                  // onChange={(e) => setValue(e.target.value)}
                  placeholder="içindekiler"
                  autoSize={{
                    minRows: 3,
                    maxRows: 5,
                  }}
                />
              </Form.Item>
            </Form.Item>

            <Form.Item label="Fiyat" required>
              <InputNumber
                defaultValue={100}
                formatter={(value) =>
                  `₺ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
                //   onChange={onChange}
              />
            </Form.Item>

            <div className="" style={{display:"flex"}} >
              
                <Button style={{ width: "50%", marginRight:"20px" }} type="primary">
                  Ekle
                </Button>
                <Button style={{ width: "50%", marginRight:"20px" }} type="primary" onClick={() => dispatch(setOperation("empty"))} >
                  geri
                </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
