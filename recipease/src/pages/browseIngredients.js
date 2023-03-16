import { Form, List, Spin } from "antd";
import { Context } from "../../Context";
import BaseLayout from "../components/base/Layout";
import IngSteps from "../components/ingredient/addIngredient/ingredientSteps";

import { useAuthState } from 'react-firebase-hooks/auth';
import { signInAnonymously } from "firebase/auth";
import { useList, useListVals } from 'react-firebase-hooks/database';
import { ref, push, child, serverTimestamp } from 'firebase/database'
import { db, auth } from "../../db";
import { useContext, useState, useEffect } from 'react';


const BrowseIngPage = (props) => {
    const { sessionData, setSessionData } = useContext(Context);

    const form = Form.useForm();

    const [user, authLoading, authError] = useAuthState(auth);
    signInAnonymously(auth);

    // useEffect(() => {
    //     signInAnonymously(auth);
    // }, []);

    console.log(user)

    const [snapshots, dbLoading, dbError] = useListVals(user ? ref(db, `/public/${user.uid}`) : null);

    console.log(snapshots)

    // const data = snapshots.map((el, _) => el.val());
    // const out = data.filter(el => ((el.type === "recipeaseData") && (el.message("Ingredients"))))
    // const data = Object.fromEntries(Object.entries(snapshots.flatMap(el => el.val())).filter(([]) => key.includes('Name')))
    // Object.filter()

    const onChange = (value) => {
        // setSessionData((prev) => ({...prev, {availableIng: }}))
    }


    return (
        <BaseLayout>
            {
                authLoading || dbLoading || !snapshots ?
                    <>
                        < Spin />
                    </>

                    :
                    // <Form
                    //     labelCol={{ span: 4 }}
                    //     wrapperCol={{ span: 14 }}
                    //     layout="horizontal"
                    //     initialValues={sessionData.userIng}
                    //     onValuesChange={onChange}
                    //     form={form}
                    // >
                    <List
                        // dataSource={snapshots.map((el, _) => el.val()).filter(el => ((el.type === "recipeaseData") && (el.message("Ingredients"))))}
                        dataSource={snapshots.filter(el => ((el.type === "data") && (el.message === "Ingredients"))).map((el, i) => JSON.parse(el.content))}
                        renderItem={
                            // (item) => (<List.Item>{item.name}</List.Item>)

                            (item) => (<List.Item>{`(${item.type.toUpperCase()}) ${item.name}`}</List.Item>)

                        }
                    />

                // </Form>

            }


        </BaseLayout>
    )
}

export default BrowseIngPage;
