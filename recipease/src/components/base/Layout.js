import React from 'react';
import { Layout, Space, Menu, Breadcrumb } from 'antd';
import AppLogo from './Logo';

import { Avatar, Card, IconButton } from 'react-native-paper';
import Sidebar from './Sidebar';
import './Layout.css'
import {
  CoffeeOutlined,

} from '@ant-design/icons';


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




const BaseLayout = (props) => {

  return (
    <div style={{ height: "100%" }}>
      <Layout hasSider style={{ height: "100%" }}>
        <Sidebar />
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >
          <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', display: "flex" }}>
            <div className='header-box'>
              <div className='header-holder'></div>
              <div className='header-brand'>
                <span style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  fontSize: "xx-large",
                }} >
                  Recipease
                </span>
                <div className='header-icon-box'>
                  <CoffeeOutlined className='header-icon' />
                </div>
              </div>
            </div>


          </Header>



          <Content className="content-container" >
            <div className='content-innerbox' style={{ padding: 25 }}>{props.children}</div>
          </Content>
          {/* <Footer style={footerStyle}>Footer</Footer> */}
        </Layout>
      </Layout>
    </div>

  )
};

export default BaseLayout;
