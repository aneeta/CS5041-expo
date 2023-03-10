import BaseLayout from "../components/base/Layout";
import CardBox from "../components/base/CardBox";
import  './home.css';
import {
    UserOutlined,
    CoffeeOutlined,
  } from '@ant-design/icons';
import { Input } from 'antd';

const { Search } = Input;

// !! the onSearch function is not complete.
const onSearch = () => console.log("function not complete");

const HomePage = (props) => (
    <BaseLayout >
        {/* <h1>Home</h1> */}
    <div className="home-container">
        <div className="user-log">
            <UserOutlined className="avatar-style"/>
            <span style={{marginLeft:"2%",marginTop:"1%"}}>Log in</span>
            <span style={{marginLeft:"2%",marginTop:"1%"}}>Sign up</span>
        </div>

        <div className="search-bar">
            <div className='search-brand'>
              <span style={{
                color:"black",
                fontFamily: "sans-serif",
                fontSize:"xx-large",
                paddingBottom:"1%",
                }} >
                Recipe
              </span>
                <CoffeeOutlined className='search-icon'/>
            </div>
            <Search className="search-input" placeholder="find recipe" onSearch={onSearch} enterButton />
        </div>

        <div className="recipe-box">
            <CardBox></CardBox>
        </div>

    </div>

    </BaseLayout>
)

export default HomePage;
