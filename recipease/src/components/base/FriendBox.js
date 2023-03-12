import React, { Component } from 'react';
import  './FriendBox.css';
import FrdCard from './FrdCard';


class FriendBox extends Component{
    render(){
        return(
          <div className='frd-main'>
            <div className='frd-box'>
               <FrdCard></FrdCard>
               <FrdCard></FrdCard>
               <FrdCard></FrdCard>
               <FrdCard></FrdCard>
                    
            </div>
          </div>  
        );
    }
}
export default FriendBox;