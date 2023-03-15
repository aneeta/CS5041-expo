import  './friend.css';
import BaseLayout from "../components/base/Layout";
import UserHeader from "../components/base/UserHeader";
import FriendBox from '../components/base/FriendBox';



const FriendPage = (props) => (
    <BaseLayout>
        <div className="friend-container">
            <div className="user-header">
                <UserHeader></UserHeader>
            </div>
            <div className="user-content">
                <FriendBox></FriendBox>
            </div>
        </div>
    </BaseLayout>
)

export default FriendPage;