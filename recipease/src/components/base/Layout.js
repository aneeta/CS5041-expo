import React from 'react';
import { Layout, Space, Menu,  Breadcrumb } from 'antd';
import AppLogo from './Logo';

import { Avatar, Card, IconButton } from 'react-native-paper';
import Sidebar from './Sidebar';

const { Header, Footer, Sider, Content } = Layout;


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};



const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};




const BaseLayout = (props) => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout hasSider>
      <Sidebar/>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%'}}>
        <div
          style={{
            float: 'right',
            width: 150,
            height: 36,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <Card.Title
    title="Recipease"
    titleStyle={{}}
    right={(props) => <Avatar.Icon {...props} icon="folder" />}
    rightStyle={{}}
  />
          {/* <Avatar.Icon size={24} icon="folder" /> */}
          {/* <AppLogo color='white'/> */}
        </div>
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        /> */}
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', overflow: "initial" }}>
        <div style={{ padding: 24, minHeight: 500}}>{props.children}</div>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  </Space>
);

export default BaseLayout;
