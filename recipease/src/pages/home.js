import BaseLayout from "../components/base/Layout";
import CardBox from "../components/base/CardBox";
import './home.css';
import {
  UserOutlined,
  CoffeeOutlined,
} from '@ant-design/icons';
import { Input, Spin } from 'antd';

import { Avatar, Button, Card, Text } from 'react-native-paper';


import { useAuthState } from 'react-firebase-hooks/auth';
import { signInAnonymously } from "firebase/auth";
import { useList, useListVals } from 'react-firebase-hooks/database';
import { ref, get, query, push, child, serverTimestamp, limitToLast } from 'firebase/database'
import { db, auth } from "../../db";
import { useContext, useState, useEffect } from 'react';
import { Context } from "../../Context";
import RecipeCard from "../components/base/RecipeCard";

const { Search } = Input;

// !! the onSearch function is not complete.
const onSearch = () => console.log("function not complete");

function getData(snapshotVal) {
  return (JSON.parse(snapshotVal.content))
}

const HomePage = (props) => {
  const { sessionData, setSessionData } = useContext(Context);

  // const [snapshots, dbLoading, dbError] = useList(sessionData.user ? ref(sessionData.db, `/public/${sessionData.user.uid}`) : null);

  const [user, authLoading, authError] = useAuthState(auth);
  const [snapshots, dbLoading, dbError] = useListVals(user ? ref(db, `/public/${user.uid}`) : null);
  console.log(snapshots)
  let parsedArr;
  return (
    <BaseLayout >
      <div className="home-container">
        <div className="user-log">
          <UserOutlined className="avatar-style" />
          <span style={{ marginLeft: "2%", marginTop: "1%" }}>Log in</span>
          <span style={{ marginLeft: "2%", marginTop: "1%" }}>Sign up</span>
        </div>

        <div className="search-bar">
          <div className='search-brand'>
            <span style={{
              color: "black",
              fontFamily: "sans-serif",
              fontSize: "xx-large",
              paddingBottom: "1%",
            }} >
              Recipe
            </span>
            <CoffeeOutlined className='search-icon' />
          </div>
          <Search className="search-input" placeholder="find recipe" onSearch={onSearch} enterButton />
        </div>

        <div className="recipe-box">

            <div className='cards-main'>
                <div className='cards-box'>

                    

          {authLoading || dbLoading || !snapshots ?
            <>
              < Spin />
            </>

            :
            snapshots?.filter(el => ((el.type === "data") || (el.type === "test") )).map((el, i) => JSON.parse(el.content)).map((el, i) => (
              (el.infoForm)? <RecipeCard aaa = {el.infoForm} user = {user}></RecipeCard>:""
            ))
            }
            

                </div>
            </div>  
         
        </div>

      </div>

    </BaseLayout>
  )
}

export default HomePage;
