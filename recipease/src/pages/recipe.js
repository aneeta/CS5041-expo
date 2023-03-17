import BaseLayout from "../components/base/Layout";
import React, { useContext, useEffect, useMemo, useState } from "react";
import './recipe.css';
import { List, Spin } from "antd";
import { useParams } from "react-router-dom";
import { Context } from "../../Context";


const RecipePage = (props) => {
    const { sessionData, setSessionData } = useContext(Context);

    const params = useParams();
    console.log(params.recipeId)
    // params.projectId; // abc
    // params.taskId; // 3

    // const [author, obj, data]

    const zip = (a, b) => a.map((k, i) => [k, b[i]]);



    const recipeFilter = (el) => ((el.type === "data") && (el.message == "Recipe"))

    console.log(
        sessionData.allSnapshots?.map((el, _) => [el.key, el.val()])
            .map(([k, v], i) => [k, Object.values(v).flat()])
            .flatMap(([k, v]) => v.map((el, i) => [k, el])) // zip
            .filter(([k, v]) => recipeFilter(v))
            .map(([k, v], _) => [k, v.created, JSON.parse(v.content)])
            .filter(([k, t, v]) => (v.infoForm.name === params.recipeId))[0]
    )

    const [data, setData] = useState(["", 0, {}])

    useEffect(() => {
        if (sessionData.allSnapshots) {
            setData(
                sessionData.allSnapshots?.map((el, _) => [el.key, el.val()])
                    .map(([k, v], i) => [k, Object.values(v).flat()])
                    .flatMap(([k, v]) => v.map((el, i) => [k, el])) // zip
                    .filter(([k, v]) => recipeFilter(v))
                    .map(([k, v], _) => [k, v.created, JSON.parse(v.content)])
                    .filter(([k, t, v]) => (v.infoForm.name === params.recipeId))[0]
            )
        }

    }, [sessionData])


    // const  = sessionData.allSnapshots?.map((el, _) => [el.key, el.val()])
    //     .map(([k, v], i) => [k, Object.values(v).flat()])
    //     .flatMap(([k, v]) => v.map((el, i) => [k, el])) // zip
    //     .filter(([k, v]) => recipeFilter(v))
    //     .map(([k, v], _) => [k, v.created, JSON.parse(v.content)])
    //     .filter(([k, t, v]) => (v.infoForm.name === params.recipeId))[0]

    // .filter((el) => (el[2].infoForm.name === params.recipeId))[0]

    // .map(([k, v]) => [k, v.flat()]))
    // .filter(([k, v]) => ((v.type === "data") && (v.message == "Recipe")))
    // .map(([k, v], _) => [k, v, JSON.parse(v.content)])
    // .filter(el => (el[2].infoForm.name === params.recipeId))[0]
    // const author = 
    return (
        <BaseLayout >
            {sessionData.authLoading || sessionData.allDbLoading || !sessionData.allSnapshots ?
                <>
                    < Spin />
                </> :
                <>
                    <div className="recipe-container">
                        <div className="recipe-img-box">
                            <img className='recipe-img' src={data?.[2]?.infoForm?.cover || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} />
                        </div>
                        <div className="info-bar">
                            <span className="dishname">{data?.[2]?.infoForm?.name}</span>
                            <span className="dish-info1">Author: </span>
                            <span className="dish-info2">{data?.[0]}</span>
                            <span className="dish-info1">Date: </span>
                            <span className="dish-info2">{new Date(data?.[1]).toLocaleDateString("en-UK")}</span>
                        </div>
                        <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'center', width: "80%" }}>
                            <div className='line'></div>
                        </div>
                        <div className="recipe-box">
                            <span className="recipe-title">Ingredients</span>
                            <span className="recipe-content">
                                <List
                                    dataSource={data?.[2].ingData}
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
                                    dataSource={data?.[2].method}
                                    renderItem={
                                        // (item) => (<List.Item>{item.name}</List.Item>)

                                        (item) => (<List.Item>{`${item.step}`}</List.Item>)

                                    }
                                />
                            </span>

                        </div>

                    </div>
                </>
            }

        </BaseLayout>
    )

}


export default RecipePage;
