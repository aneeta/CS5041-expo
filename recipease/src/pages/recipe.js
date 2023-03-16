import BaseLayout from "../components/base/Layout";
import React from "react";
import './recipe.css';
import { List } from "antd";

const RecipePage = (props) => {


    return (
        <BaseLayout >
            <div className="recipe-container">
                <div className="recipe-img-box">
                    <img className='recipe-img' src='https://cdn2.thecatapi.com/images/6u9.jpg' />
                </div>
                <div className="info-bar">
                    <span className="dishname">{props.name}</span>
                    <span className="dish-info1">Author: </span>
                    <span className="dish-info2">{props.author}</span>
                    <span className="dish-info1">Date: </span>
                    <span className="dish-info2">{props.date}</span>
                </div>
                <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'center', width: "80%" }}>
                    <div className='line'></div>
                </div>
                <div className="recipe-box">
                    <span className="recipe-title">Ingredients</span>
                    <span className="recipe-content">
                        <List
                            dataSource={props.ingredients}
                            renderItem={
                                // (item) => (<List.Item>{item.name}</List.Item>)

                                (item) => (<List.Item>{`${item.ing} (${item.amount})`}</List.Item>)

                            }
                        />

                    </span>
                </div>

                <div className="recipe-box">
                    <span className="recipe-title">Steps</span>
                    <span className="recipe-content">
                        <List
                            dataSource={props.method}
                            renderItem={
                                // (item) => (<List.Item>{item.name}</List.Item>)

                                (item) => (<List.Item>{`${item.step}`}</List.Item>)

                            }
                        />
                    </span>

                </div>

            </div>
        </BaseLayout>
    )

}


export default RecipePage;
