import { Form, List, Spin, Checkbox, Table } from "antd";
import { Context } from "../../Context";
import BaseLayout from "../components/base/Layout";
import IngSteps from "../components/ingredient/addIngredient/ingredientSteps";

import { useAuthState } from 'react-firebase-hooks/auth';
import { signInAnonymously } from "firebase/auth";
import { useList, useListVals } from 'react-firebase-hooks/database';
import { ref, push, child, serverTimestamp, get } from 'firebase/database'
import { db, auth } from "../../db";
import { useContext, useState, useEffect } from 'react';

import ING_TYPES from '../components/ingredient/ingList'
import { Row } from "antd";
import { Divider } from "antd";
import { Col } from "antd";

import { TreeSelect } from 'antd';
import { Descriptions, Select } from "antd";
import { Button } from "antd";

import { remove, set } from 'firebase/database'
import { message } from "antd";
import RecipeCard from "../components/base/RecipeCard";


const { SHOW_PARENT } = TreeSelect;

const cuisines = ["Thai", "Indian", "French", "American", "Chinese", "Turkish", "Mexican"]
const meals = ["Breakfast", "Brunch", "Lunch", "Dinner", "Dessert", "Snack"]
const occasion = ["Christmas", "Birthday", "Halloween", "Valentines", "Thanksgiving"]

const { Option } = Select;

const BrowseRecipePage = (props) => {
    const { sessionData, setSessionData } = useContext(Context);

    // const [meal, setMeals] = useState([])
    // const [occasions, setOccasions] = useState([])
    // const [cuisines, setCuisines] = useState([])

    const [filter, setFilters] = useState({})
    const [data, setData] = useState()

    const onChange = (changedValues) => {
        // console.log(filter)
        setFilters((prev) => ({ ...prev, ...changedValues }))
        console.log("filters", filter)
        setData(
            sessionData.allSnapshots?.map((el, _) => el.val())
                .map((el, i) => Object.values(el)).flat()
                .filter(el => ((el.type === "dataFinal") && (el.message == "Recipe")))
                .map((el, _) => JSON.parse(el.content))
            // .filter((el) => filterRecipes(el))
        )
        console.log(filter)
    }

    const filterRecipes = (r) => {
        console.log("filter", r)
        return (
            (filter.meal?.includes(r.infoForm.meal) || !filter.meal)
            && (filter.cuisines?.some(i => r.infoForm.cuisines.includes(i)) || !filter.cuisines)
            && (filter.occasions?.some(i => r.infoForm.occasions.includes(i)) || !filter.occasions)
        )
    }

    useEffect(() => {
        setData(
            sessionData.allSnapshots?.map((el, _) => el.val())
                .map((el, i) => Object.values(el)).flat()
                .filter(el => ((el.type === "dataFinal") && (el.message == "Recipe")))
                .map((el, _) => JSON.parse(el.content))
                .filter((el) => filterRecipes(el))
        )
    }, [sessionData, filter])

    console.log("data", sessionData.allSnapshots?.map((el, i) => Object.values(el)).flat()
        .filter(el => ((el.type === "dataFinal") && (el.message == "Recipe")))
        .map((el, _) => JSON.parse(el.content)))
    return (
        <BaseLayout>
            <Divider orientation="right">Filters</Divider>
            <Form
                onValuesChange={onChange}
            >
                <Form.Item
                    name="meal"
                    label="Meal"
                >
                    <Select mode="multiple" >
                        {meals.map((el, i) => <Option value={el} key={el}>{el}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="cuisines"
                    label="Cuisine"
                >
                    <Select mode="multiple">
                        {cuisines.map((el, i) => <Option value={el} key={el}>{el}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="occasions"
                    label="Occasion"
                >
                    <Select mode="multiple">
                        {occasion.map((el, i) => <Option value={el} key={el}>{el}</Option>)}
                    </Select>
                </Form.Item>
            </Form>

            <Divider orientation="right">Recipes</Divider>
            {
                sessionData.authLoading || sessionData.allDbLoading || !sessionData.allSnapshots ?
                    <>
                        < Spin />
                    </>
                    :
                    <>
                        {data?.map((el, i) => <RecipeCard key={i} data={el.infoForm} />)}
                    </>
            }
        </BaseLayout>



    )

}

export default BrowseRecipePage;
