import React, { Component } from 'react';
import  './UserHeader.css';
import {
    TeamOutlined,
    ShareAltOutlined,
    BellOutlined

  } from '@ant-design/icons';


class UserHeader extends Component{

    render(){
        return(
        <div style={{display:'flex', flexDirection:'column'}}>
            <div  className='user-header-container'>
                <div className='user-header'>
                    <div className='user-avatar-box'>
                       <img className='user-avatar' src='https://cdn2.thecatapi.com/images/6u9.jpg'></img>
                    </div>
                    
                    <div className='user-info'>
                        <div className='user-info-item'></div>
                        <div style={{display:'flex', alignItems:'center',height:'32%'}}>
                            <span className='username'>Username</span>
                        </div>
                        <div className='user-info-item'>
                            <span style={{marginLeft:'3px', fontSize:'18px',color: 'rgb(177, 177, 177)'}}>Followers: 43</span>
                            <button className='btn-follow'>+ Follow</button>
                        </div>
                    </div>
                    <div className='user-btns-box'>
                        <TeamOutlined className='user-btns-style'></TeamOutlined>
                    </div>
                    <div className='user-btns-box'>
                        <ShareAltOutlined className='user-btns-style' />
                    </div>
                    <div className='user-btns-box'>
                        <BellOutlined className='user-btns-style'/>  
                    </div>
                </div>
            </div>
            <div style={{marginTop:'10px',display:'flex',justifyContent:'center'}}>
                <div className='line'></div>
            </div>
            
        </div>
        );
    }
}
export default UserHeader;