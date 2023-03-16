import BaseLayout from "../components/base/Layout";
import CardBox from "../components/base/CardBox";
import './home.css';
import {
  UserOutlined,
  CoffeeOutlined,
} from '@ant-design/icons';
import { Input, Spin, Radio } from 'antd';

import { Avatar, Button, Card, Text } from 'react-native-paper';


import { useAuthState } from 'react-firebase-hooks/auth';
import { signInAnonymously } from "firebase/auth";
import { useList, useListVals } from 'react-firebase-hooks/database';
import { ref, get, query, push, child, serverTimestamp, limitToLast } from 'firebase/database'
import { db, auth } from "../../db";
import { useContext, useState, useEffect } from 'react';
import { Context } from "../../Context";

const { Search } = Input;

// !! the onSearch function is not complete.
const onSearch = () => console.log("function not complete");

function getData(snapshotVal) {
  return (JSON.parse(snapshotVal.content))
}

const HomePage = (props) => {
  const { sessionData, setSessionData } = useContext(Context);

  const [filtered, setFiltered] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [filterIng, setFilterIng] = useState(false);

  const filter = () => {
    setFilterIng(!filterIng)
    setRecipes(
      filterIng ? filtered.filter((el) => el.ingData.map((el, _) => el.ing.toLowerCase()).every(val => sessionData.availableIng().includes(val))) : filtered
    )
  }

  // useEffect(() => {
  //   const fil = sessionData.allSnapshots.map((el, _) => el.val()).map((el, i) => Object.values(el)).flat().filter(el => ((el.type === "data") && (el.message == "Recipe"))).map((el, _) => JSON.parse(el.content))
  //   setFiltered(fil)
  // }, [sessionData]);

  // const [snapshots, dbLoading, dbError] = useList(sessionData.user ? ref(sessionData.db, `/public/${sessionData.user.uid}`) : null);

  // const [user, authLoading, authError] = useAuthState(auth);
  // const [snapshots, dbLoading, dbError] = useListVals(user ? ref(db, `/public/${user.uid}`) : null);
  // console.log(snapshots)
  // const allRecipes = 
  // console.log("sessionData", sessionData)
  return (
    <BaseLayout>
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
          {sessionData.authLoading || sessionData.allDbLoading || !sessionData.allSnapshots ?
            <>
              < Spin />
            </>

            :

            <>
              <Button onClick={filter} type="primary">{!filterIng ? "Show What I Can Make" : "Show All Recipes"}</Button>

              {sessionData.allSnapshots.map((el, _) => el.val()).map((el, i) => Object.values(el)).flat().filter(el => ((el.type === "data") && (el.message == "Recipe"))).map((el, _) => JSON.parse(el.content)).map((el, i) =>
                <Card key={i}>
                  <Card.Title
                    title={el.infoForm.name} // Recipe name
                  // user.uid // user string
                  // also put some default placeholder image if one is missing
                  />
                  {/* <Card.Cover source={{ uri: el.content.infoForm.cover }} /> */}
                </Card>
              )}
            </>


          }

          {/* <CardBox></CardBox> */}
        </div>

      </div>

    </BaseLayout>
  )
}

export default HomePage;
