import BaseLayout from "../components/base/Layout";
import UserHeader from "../components/base/UserHeader";
import CardBox from "../components/base/CardBox";
import  './profile.css';
const ProfilePage = (props) => (
    <BaseLayout>
        <div className="profile-container">
            <div className="user-header">
                <UserHeader></UserHeader>
            </div>
            <div className="user-content">
            <CardBox></CardBox>
            </div>
        </div>
    </BaseLayout>
)

export default ProfilePage;
