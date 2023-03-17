import BaseLayout from "../components/base/Layout";
import './home.css';
import { CoffeeOutlined } from '@ant-design/icons';
import { Input, Spin, Radio } from 'antd';

import { Button } from 'react-native-paper';

import { useContext, useEffect, useState } from 'react';
import { Context } from "../../Context";

import RecipeCard from "../components/base/RecipeCard";

const HomePage = (props) => {
  const { sessionData, setSessionData } = useContext(Context);

  const [filterIng, setFilterIng] = useState(false);

  const filter = () => {
    setFilterIng(!filterIng)
  }

  return (
    <BaseLayout>
      {/* <div className="home-container"> */}
      <div className="search-bar">
        <div className='search-brand'>
          <span style={{
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "xx-large",
            paddingBottom: "1%",
          }} >
            Recipease Home
          </span>
          <CoffeeOutlined className='search-icon' />
        </div>
      </div>
      <Button onClick={filter} type="primary">{!filterIng ? "Show My Recipes" : "Show All Recipes"}</Button>

      {/* <div className="recipe-box"> */}
      <div className='cards-main'>
        <div className='cards-box'>
          {sessionData.authLoading || sessionData.allDbLoading || !sessionData.allSnapshots || sessionData.dbLoading ?
            <>
              < Spin />
            </>
            :
            <>
              {!filterIng ?
                sessionData.allSnapshots?.map((el, _) => el.val())
                  .map((el, i) => Object.values(el)).flat()
                  .filter(el => ((el.type === "dataFinal") && (el.message == "Recipe")))
                  .map((el, _) => JSON.parse(el.content))
                  .map((el, i) => <RecipeCard key={i} data={el.infoForm} />)
                :
                sessionData.snapshots?.map((el, _) => el.val())
                  .filter(el => ((el.type === "dataFinal") && (el.message == "Recipe")))
                  .map((el, i) => JSON.parse(el.content))
                  .map((el, i) => <RecipeCard key={i} data={el.infoForm} />)
              }
            </>
          }
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </BaseLayout >
  )
}

export default HomePage;
