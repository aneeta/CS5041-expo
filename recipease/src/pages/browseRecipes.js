import { useContext, useState, useEffect } from 'react';
import { Form, Divider, Spin, Select, Table } from "antd";
import { Context } from "../../Context";
import BaseLayout from "../components/base/Layout";
import RecipeCard from "../components/base/RecipeCard";
import RECIPE_TYPES from "../components/recipe/typeList";
import './browseRecipes.css';

// schema
const cuisines = RECIPE_TYPES.cuisines
const meals = RECIPE_TYPES.meals
const occasion = RECIPE_TYPES.occasion

const { Option } = Select;

const BrowseRecipePage = (props) => {
    const { sessionData, setSessionData } = useContext(Context);

    const [filter, setFilters] = useState({})
    const [data, setData] = useState()

    const onChange = (changedValues) => {
        setFilters((prev) => ({ ...prev, ...changedValues }))
        console.log("filters", filter)
        setData(
            sessionData.allSnapshots?.map((el, _) => el.val())
                .map((el, i) => Object.values(el)).flat()
                .filter(el => ((el.type === "dataFinal") && (el.message == "Recipe")))
                .map((el, _) => JSON.parse(el.content))
                .filter((el) => filterRecipes(el))
        )
        // console.log(filter)
    }

    const filterRecipes = (r) => {
        // console.log("filters", filter.meal?.includes(r.infoForm.meal))
        return (
            (filter.meal?.includes(r.infoForm.meal) || !filter.meal || filter.meal.length === 0)
            && (filter.cuisines?.some(i => r.infoForm.cuisines?.includes(i)) || !filter.cuisines || filter.cuisines.length === 0)
            && (filter.occasions?.some(i => r.infoForm.occasions?.includes(i)) || !filter.occasions || filter.occasions.length === 0)
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

    // console.log("data", sessionData.allSnapshots?.map((el, i) => Object.values(el)).flat()
    //     .filter(el => ((el.type === "dataFinal") && (el.message == "Recipe")))
    //     .map((el, _) => JSON.parse(el.content)))
    return (
        <BaseLayout>
            <Divider orientation="center">Filters</Divider>
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
            <Divider orientation="center">Recipes</Divider>
            <div className="box">
                <div className='cards-main'>
                    <div className='cards-box'>
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
                    </div>
                </div>
            </div>

        </BaseLayout>
    )
}

export default BrowseRecipePage;
