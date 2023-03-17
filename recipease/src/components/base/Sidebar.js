import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, ShoppingCartOutlined, BookOutlined } from '@ant-design/icons';

const { Sider } = Layout;


const siderStyle = {
  width: 200,
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  textAlign: 'left',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

// TODO fix 
// Warning: [antd: Menu] `children` will be removed in next major version. Please use `items` instead.
const Sidebar = (props) => (
  <Sider style={siderStyle}>
    <Menu
      mode="inline"
      style={{ height: '100%' }}
    >
      <Menu.Item key='home-nav' icon={<HomeOutlined />}>
        <Link to={'/'}>Home</Link>
      </Menu.Item>
      <Menu.SubMenu key='recipe-nav' title="Recipe" icon={<BookOutlined />}>
        <Menu.Item key='browse-recipe-nav'>
          <Link to={'/browse-recipes'}>Browse</Link>
        </Menu.Item>
        <Menu.Item key='add-recipe-nav'>
          <Link to={'/add-recipe'}>Add Recipe</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='ing-nv' title="Shopping List" icon={<ShoppingCartOutlined />}>
        <Menu.Item key='browse-ing-nav'>
          <Link to={'/browse-ingredients'}>View</Link>
        </Menu.Item>
        <Menu.Item key='add-ing-nav'>
          <Link to={'/add-ingredient'}>Add Item</Link>
        </Menu.Item>
      </Menu.SubMenu>
      {/* <Menu.Item key='profile-nav' icon={<HomeOutlined />}>
        <Link to={'/profile'}>Profile</Link>
      </Menu.Item> */}
      {/* <Menu.Item key='friend-nav' icon={<HomeOutlined />}>
        <Link to={'/friends'}>Friends Page</Link>
      </Menu.Item> */}
      {/* <Menu.Item key='recipe-pag-nav' icon={<HomeOutlined />}>
        <Link to={'/recipe'}>Recipe Page</Link>
      </Menu.Item> */}
      <Menu.Item key='db-pag-nav' icon={<HomeOutlined />}>
        <Link to={'/dbtest'}>DB Test Page</Link>
      </Menu.Item>
    </Menu>
  </Sider>
)

export default Sidebar;
