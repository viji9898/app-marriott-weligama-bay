import { React } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Outlet, Link } from "react-router-dom";
import { Synopsis } from "../components/synopsis";

export const Main = () => {
  const { Header, Sider, Content } = Layout;

  const sideNavbar = (
    <Sider>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/directory">Directory</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/budget">Budget</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );

  return (
    <Layout>
      {sideNavbar}
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div>
            <Synopsis />
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
