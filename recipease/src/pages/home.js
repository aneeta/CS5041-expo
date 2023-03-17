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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../components/base/RecipeCard";

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
        <Button onClick={filter} type="primary">{!filterIng ? "Show My Recipes" : "Show All Recipes"}</Button>

        <div className="recipe-box">
          <div className='cards-main'>
            <div className='cards-box'>
              {sessionData.authLoading || sessionData.allDbLoading || !sessionData.allSnapshots || sessionData.dbLoading ?



                <>
                  < Spin />
                </>

                :

                <>

                  {!filterIng ?
                    sessionData.allSnapshots?.map((el, _) => el.val()).map((el, i) => Object.values(el)).flat().filter(el => ((el.type === "data") && (el.message == "Recipe"))).map((el, _) => JSON.parse(el.content)).map((el, i) =>
                      // console.log(el))
                      <RecipeCard key={i} data={el.infoForm} />)
                    // (el.infoForm) ? <RecipeCard data={el.infoForm} /> : "")
                    // <Card key={i}
                    //   onPress={() => navigate(`/recipe/${el.infoForm.name}`)}
                    // >
                    //   <Card.Title
                    //     title={el.infoForm.name}
                    //   />
                    //   <Card.Cover source={{ uri: (el.content.infoForm.cover ? el.content.infoForm.cover : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png") }} />
                    // </Card>) 
                    :
                    sessionData.snapshots?.map((el, _) => el.val()).map((el, i) => Object.values(el)).flat().filter(el => ((el.type === "data") && (el.message == "Recipe"))).map((el, _) => JSON.parse(el.content)).map((el, i) =>
                      <RecipeCard key={i} data={el.infoForm} />)
                  }

                </>
              }
            </div>
          </div>
        </div>
      </div>
    </BaseLayout >
  )
}

export default HomePage;

//  {/* {filterIng ?

//                 sessionData.allSnapshots?.map((el, _) => el.val()).map((el, i) => Object.values(el)).flat().filter(el => ((el.type === "data") && (el.message == "Recipe"))).map((el, _) => JSON.parse(el.content)).map((el, i) =>
//                   <Card key={i}
//                     onPress={navigate(`/recipe/${el.infoForm.name}`)}
//                   >
//                     <Card.Title
//                       title={el.infoForm.name}

//                     // Recipe name
//                     // user.uid // user string
//                     // also put some default placeholder image if one is missing
//                     />
//                     {/* <Card.Cover source={{ uri: el.content.infoForm.cover }} /> */}
//                   {/* </Card>) :
//                 sessionData.snapshots?.map((el, _) => el.val()).map((el, i) => Object.values(el)).flat().filter(el => ((el.type === "data") && (el.message == "Recipe"))).map((el, _) => JSON.parse(el.content)).map((el, i) =>
//                   <Card key={i}
//                     onPress={navigate(`/recipe/${el.infoForm.name}`)}
//                   >
//                     <Card.Title
//                       title={el.infoForm.name} */}

//                     {/* // Recipe name
//                     // user.uid // user string
//                     // also put some default placeholder image if one is missing
//                     /> */}
//                     {/* <Card.Cover source={{ uri: el.content.infoForm.cover }} /> */}
//                   {/* </Card>)
//               } */} */}