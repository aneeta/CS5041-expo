import React, { Component } from 'react';
import  './CardBox.css';
import RecipeCard from './RecipeCard';

class CardBox extends Component{
    render(){
        return(
          <div className='cards-main'>
            <div className='cards-box'>
                    {/* put cards here; now just 4 example cards */}
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    
            </div>
          </div>  
        );
    }
}
export default CardBox;