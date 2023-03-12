import React, { Component } from 'react';
import  './FrdCard.css';

class FrdCard extends Component{

    render(){
        return(
            <div className='frd-card-container'>
                <div className='frd-img-box'>
                    <img className='frd-img' src='https://cdn2.thecatapi.com/images/6u9.jpg'></img>
                </div>
                <span className='frd-username'>Username</span>
            </div>
        );
    }
}
export default FrdCard;