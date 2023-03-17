import React, { Component } from 'react';
import  './RecipeCard.css';
import { Link } from 'react-router-dom';



export default function RecipeCard(props) {
    

    return (
        <div className='card-container'>
        <div className='card-inner-box' >
            <div className='card-img-box'  >
                <img className='card-img' src='https://cdn2.thecatapi.com/images/6u9.jpg'></img>
            </div>
            <div className='card-user' >
                <div className='card-avatar-box'>
                    <img className='card-avatar' src='https://cdn2.thecatapi.com/images/6u9.jpg' ></img>
                </div>
                <div className='card-avatar-box' >
                    {/* <span className='card-username'>{props.user.uid}</span> */}
                    <Link to={'/profile'}>{props.user.uid}</Link>
                </div>
            </div>
            <div className='card-text-box'>
                <div className='card-text'>
                    <span>Dish Name: {props.aaa.name}</span><br></br>
                    <span>{props.aaa.occasions}</span>
                </div>

            </div>
        </div>

    </div>
    )
}