import {
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, type MenuProps } from "antd";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../../libs/constants";
import { AppContext } from "../../contexts/app.context";
const { Header, Sider, Content } = Layout;

type Props = {
  children?: React.ReactNode;
};

type MenuItem = Required<MenuProps>["items"][number];

const MainLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();
  const { mst } = useContext(AppContext);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items: MenuItem[] = [
    {
      key: ROUTE.HOME,
      label: "Trang chủ",
      icon: <HomeOutlined />,
    },
    {
      key: ROUTE.LOGOUT,
      label: "Đăng xuất",
      icon: <LogoutOutlined />,
    },
  ];

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location]);

  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={256}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          padding: 8,
          transform: collapsed ? "translateX(-80px)" : "translateX(0)",
        }}
      >
        {!collapsed ? (
          <h2
            style={{
              padding: "24px",
              margin: 0,
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              backgroundColor: "#001529",
            }}
          >
            NACENCOMN
          </h2>
        ) : (
          <div style={{ height: "84px" }}></div>
        )}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={items}
          onClick={(item) => {
            navigate(item.key);
          }}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: !collapsed ? 256 : 0,
        }}
      >
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
            top: 0,
            height: 80,
            right: 0,
            left: collapsed ? 0 : 256,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            zIndex: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                marginRight: "16px",
              }}
            />
            <h3 style={{ textTransform: "uppercase" }}>
              Dữ liệu hóa đơn điện tử đầu vào
            </h3>
          </div>

          <div>
            <p>
              Mã số thuế: <b>{mst ? mst : ""}</b>
            </p>
          </div>
        </Header>
        <Content
          style={{
            marginTop: "64px",
            padding: 16,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
