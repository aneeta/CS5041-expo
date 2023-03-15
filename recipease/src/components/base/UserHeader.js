import React, { Component } from 'react';
import  './UserHeader.css';
import {
    TeamOutlined,
    ShareAltOutlined,
    BellOutlined

  } from '@ant-design/icons';

// important: when using UserHeader, the parent container must set width:100%
// otherwise the items in UserHeader will squeezed together.


class UserHeader extends Component{

    render(){
        return(
        <div style={{display:'flex', flexDirection:'column', width:'100%',height:"100%"}}>
            {/* <div  className='user-header-container'> */}
                <div className='user-header'>
                    <div className='user-avatar-box'>
                       <img className='user-avatar' src='https://cdn2.thecatapi.com/images/6u9.jpg'></img>
                    </div>
                    
                    <div className='user-info'>
                        <div style={{height:"32%"}}></div>
                        <span className='username'>Username</span>                        
                        <div className='user-info-item'>
                            <span style={{marginLeft:'3px', fontSize:'18px',color: 'rgb(0, 0, 0)'}}>Followers: 43</span>
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
            {/* </div> */}
            <div style={{marginTop:'10px',display:'flex',justifyContent:'center'}}>
                <div className='line'></div>
            </div>
            
        </div>
        );
    }
}
export default UserHeader;