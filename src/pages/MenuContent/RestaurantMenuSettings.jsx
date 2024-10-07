import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOperation } from "../../store/MenuOperationsSlice";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import AddMenuItem from "./AddMenuItem";

export default function RestaurantMenuSettings() {
  const dispatch = useDispatch();
  const operation = useSelector((state) => state.menu.operation);

  return (
    <>
      {operation === "empty" && (
        <>
          <h1>Menu Ayarları</h1>
          <div style={{ marginTop: "50px", display: "flex" }}>
            <Button
              style={{ marginRight: "20px" }}
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => dispatch(setOperation("add"))}
            >
              Yemek Ekle
            </Button>
            <Button
              style={{ marginRight: "20px" }}
              icon={<MinusOutlined />}
              type="primary"
              onClick={() => dispatch(setOperation("delete"))}
            >
              Yemek Sil
            </Button>
          </div>
        </>
      )}

      {operation === "add" && <AddMenuItem />}
    </>
  );
}
