import BaseLayout from "../components/base/Layout";
import UserHeader from "../components/base/UserHeader";
import CardBox from "../components/base/CardBox";
import  './profile.css';
import { FloatButton } from 'antd';
import {
    PlusOutlined
  } from '@ant-design/icons';

//check the APIs (like onclick) about floatbutton on ant design website.
const FBtn = () => <FloatButton icon={<PlusOutlined />} tooltip={<div>Add a recipe</div>} />;

const ProfilePage = (props) => (
    <BaseLayout>
        <div className="profile-container">
            <div className="user-header">
                <UserHeader></UserHeader>
            </div>
            <div className="user-content">
            <CardBox></CardBox>
            </div>
            <div >
                <FBtn></FBtn>
            </div>
        </div>
    </BaseLayout>
)

export default ProfilePage;
