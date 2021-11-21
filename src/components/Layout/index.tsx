import React from "react";
import { Layout, Menu } from "antd";

export interface ILayoutProps {}

const { Header, Content, Footer } = Layout;

const LayoutComponent: React.FC<ILayoutProps> = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "50px", marginTop: 64 }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Expense Tracker & Emre Yoleri 2021
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
