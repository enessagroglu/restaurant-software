import React, { useState } from "react";
import Tables from "./pages/Tables.jsx";
import imgLogo from "./assets/butterfly_logo.png";
import Home from "./pages/Home.jsx";
import {
  NotificationOutlined,
  UserOutlined,
  HomeOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import './App.css';
import RestaurantMenu from "./pages/MenuContent/RestaurantMenu.jsx";
import RestaurantMenuSettings from "./pages/MenuContent/RestaurantMenuSettings.jsx";



const { Header, Content, Sider } = Layout;

const componentMapping = {
  0: <Home />,
  "1-1": <div><RestaurantMenu/></div>,
  "1-2": <div><RestaurantMenuSettings/></div>,
  "2-1": <Tables />,
  "2-2": <div>Masa Ayarları</div>,
  "3-1": <div>Alerts Component</div>,
  "3-2": <div>Messages Component</div>,
};

const menuData = [
  {
    key: "0",
    icon: <HomeOutlined />,
    label: "Anasayfa",
  },
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Menü Ayarları",
    children: [
      { key: "1-1", label: "Menüyü Görüntüle" },
      { key: "1-2", label: "Menüyü Düzenle" },
    ],
  },
  {
    key: "2",
    icon: <TableOutlined />,
    label: "Masalar",
    children: [
      { key: "2-1", label: "Masaları Görüntüle" },
      { key: "2-2", label: "Masa Ayarları" },
    ],
  },
  {
    key: "3",
    icon: <NotificationOutlined />,
    label: "Notifications",
    children: [
      { key: "3-1", label: "Alerts" },
      { key: "3-2", label: "Messages" },
    ],
  },
];

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedContentKey, setSelectedContentKey] = useState("0");

  const handleMenuClick = (e) => {
    setSelectedContentKey(e.key);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0958d9",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: 0,
            backgroundColor: "#0958d9",
            color: "white",
          }}
        >
          
          
          <img src={imgLogo} alt="logo" className="bannerLogo" />
          <h2 style={{color:"white"}}>Parpali Pide</h2>
          
            
            
          
          
        </Menu>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            style={{
              height: "100%",
              borderRight: 0,
            }}
            onClick={handleMenuClick}
          >
            {menuData.map((menu) =>
              menu.children ? (
                <Menu.SubMenu
                  key={menu.key}
                  icon={menu.icon}
                  title={menu.label}
                >
                  {menu.children.map((subItem) => (
                    <Menu.Item key={subItem.key}>{subItem.label}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={menu.key} icon={menu.icon}>
                  {menu.label}
                </Menu.Item>
              )
            )}
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              marginTop: 12,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {componentMapping[selectedContentKey] || "Content"}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
