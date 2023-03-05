import React, { Component } from 'react';
import  './RecipeCard.css';

class RecipeCard extends Component{

    render(){
        return(
            <div className='card-container'>
                <div className='card-inner-box'>
                    <div className='card-img-box'>
                        <img className='card-img' src='https://cdn2.thecatapi.com/images/6u9.jpg'></img>
                    </div>
                    <div className='card-user' >
                        <div className='card-avatar-box'>
                            <img className='card-avatar' src='https://cdn2.thecatapi.com/images/6u9.jpg' ></img>
                        </div>
                        <div className='card-avatar-box'>
                            <span className='card-username'>UserName</span>
                        </div>
                    </div>
                    <div className='card-text-box'>
                        <div className='card-text'>
                            <span>spaceholder spaceholder spaceholder spaceholder</span>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
export default RecipeCard;