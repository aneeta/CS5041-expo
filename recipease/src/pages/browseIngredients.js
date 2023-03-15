import { Form, List } from "antd";
import { Context } from "../../Context";
import BaseLayout from "../components/base/Layout";
import IngSteps from "../components/ingredient/addIngredient/ingredientSteps";

import { useAuthState } from 'react-firebase-hooks/auth';
import { signInAnonymously } from "firebase/auth";
import { useList } from 'react-firebase-hooks/database';
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

    const [snapshots, dbLoading, dbError] = useList(user ? ref(db, `/public`) : null);

    console.log(snapshots)

    const data = snapshots.map((el, _) => el.val());
    const out = data.filter(el => ((el.type === "recipeaseData") && (el.message("Ingredients"))))
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
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        initialValues={sessionData.userIng}
                        onValuesChange={onChange}
                        form={form}
                    >


                    </Form>
                // <List
                //     // dataSource={snapshots.map((el, _) => el.val()).filter(el => ((el.type === "recipeaseData") && (el.message("Ingredients"))))}
                //     dataSource={snapshots}
                //     renderItem={
                //         (item) => (<List.Item>{console.log(item)}</List.Item>)

                //     }
                // />
            }


        </BaseLayout>
    )
}

export default BrowseIngPage;
