import BaseLayout from "../components/base/Layout";
import React from "react";
import  './recipe.css';

const RecipePage = (props) => (
    <BaseLayout >
        <div className="recipe-container">
            <div className="recipe-img-box">
                <img className='recipe-img' src='https://cdn2.thecatapi.com/images/6u9.jpg'/>
            </div>
            <div className="info-bar">
                <span className="dishname">Dish Name</span>
                <span className="dish-info1">Author: </span>
                <span className="dish-info2">blablabla</span>
                <span className="dish-info1">Date: </span>
                <span className="dish-info2">xx-xx-xx</span>
            </div>
            <div style={{marginTop:'5px',display:'flex',justifyContent:'center',width:"80%"}}>
                <div className='line'></div>
            </div>
            <div className="material-box">
                <span className="materials-title">Materials</span>
                <span className="materials-content">Pasta (US: /ˈpɑːstə/, UK: /ˈpæstə/; Italian pronunciation: [ˈpasta]) is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. Rice flour, or legumes such as beans or lentils, are sometimes used in place of wheat flour to yield a different taste and texture, or as a gluten-free alternative. Pasta is a staple food of Italian cuisine.[1][2] </span>
            </div>

            <div className="step-box"></div>

        </div>
    </BaseLayout>
)

export default RecipePage;
