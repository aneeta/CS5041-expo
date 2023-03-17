import React, { Component } from 'react';

import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Divider, Space, Tag } from 'antd';


import './RecipeCard.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function RecipeCard(props) {
    const navigate = useNavigate()

    return (
        // <div className='card-container'>
        <Card key={props.key}
            onPress={() => navigate(`/recipe/${props.data?.name}`)}
        >
            <Card.Cover source={{ uri: (props.data.cover ? props.data.cover : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png") }} />
            <Card.Title
                title={props.data?.name}
            />
            <Card.Content>
                {(props.data.cuisines) ?
                    <>
                        <Divider orientation='right'>Cuisines</Divider>
                        <Space size={[0, 4]} wrap>
                            {props.data.cuisines?.map((el, _) => <Tag color="gold">{el}</Tag>)}
                        </Space>
                    </>
                    : (<></>)
                }
                {(props.data.occasions) ?
                    <>
                        <Divider orientation='right'>Occasions</Divider>
                        <Space size={[0, 4]} wrap>
                            {props.data.occasions?.map((el, _) => <Tag color="geekblue">{el}</Tag>)}
                        </Space>
                    </>
                    : (<></>)
                }

            </Card.Content>

        </Card>
        // </div>
    )
}

// return (
//     <div className='card-container'>
//         <div className='card-inner-box' >
//             <div className='card-img-box'  >
//                 <img className='card-img' src='https://cdn2.thecatapi.com/images/6u9.jpg'></img>
//             </div>
//             <div className='card-user' >
//                 <div className='card-avatar-box'>
//                     <img className='card-avatar' src='https://cdn2.thecatapi.com/images/6u9.jpg' ></img>
//                 </div>
//                 <div className='card-avatar-box' >
//                     {/* <span className='card-username'>{props.user.uid}</span> */}
//                     <Link to={'/profile'}>{props.user.uid}</Link>
//                 </div>
//             </div>
//             <div className='card-text-box'>
//                 <div className='card-text'>
//                     <span>Dish Name: {props.aaa.name}</span><br></br>
//                     <span>{props.aaa.occasions}</span>
//                 </div>

//             </div>
//         </div>
//     </div>
// )