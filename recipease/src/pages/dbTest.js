import { Button, List, Spin } from "antd";
import BaseLayout from "../components/base/Layout";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInAnonymously } from "firebase/auth";
import { useList } from 'react-firebase-hooks/database';
import { ref, get, query, push, child, serverTimestamp, limitToLast } from 'firebase/database'
import { db, auth } from "../../db";
import { useContext, useState, useEffect } from 'react';
import { Context } from "../../Context";


const DbTest = (props) => {
    const { sessionData, setSessionData } = useContext(Context);

    // console.log(sessionData)

    const [user, authLoading, authError] = useAuthState(auth);

    const dbRef = ref(db);

    const [snapshots, dbLoading, dbError] = useList(user ? ref(db, `/public/${user.uid}`) : null);
    // const recentPostsRef = query(ref(db, 'public/'), limitToLast(10));

    // get(recentPostsRef).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         console.log(snapshot.val());
    //     } else {
    //         console.log("No data available");
    //     }
    // }).catch((error) => {
    //     console.error(error);
    // });

    // const [ings, setIngs] = useState([])

    // useEffect(() => {
    //     (async () => {
    //         signInAnonymously(auth);
    //         const res = await useList(user ? ref(db, `/public`) : null);
    //         setIngs(await res);
    //     })()
    // }, []);


    // const data = snapshots.map((el, _) => el.val());
    // const out = data.filter(el => ((el.type === "recipeaseData") && (el.message("Ingredients"))))

    const submitData = () => {

        const reference = push(child(user ? ref(db) : null, `/public/${user.uid}`), {
            type: 'test',
            created: serverTimestamp(),
            modified: serverTimestamp(),
            message: "Sample text",
            content: JSON.stringify({ val1: 1, val2: 2 })
        })

        console.log(snapshots)
    }


    return (
        <BaseLayout>
            <Button onClick={submitData}>Submit something</Button>
            {authLoading || dbLoading || !snapshots ?
                <>
                    < Spin />
                </>

                :
                <List
                    // dataSource={snapshots.map((el, _) => el.val()).filter(el => ((el.type === "recipeaseData") && (el.message("Ingredients"))))}
                    dataSource={snapshots.map((el, _) => el.val()).filter(el => ((el.type === "Ingredients")))}
                    renderItem={
                        (item) => (<List.Item>{item.content}</List.Item>)

                    }
                />}

        </BaseLayout >
    )
}

export default DbTest;

// {/* // (el) => (Object.entries(el.val())).sort((a, b) => a[1].created - b[1].created).map((el, i) =>
//                     //     <List.Item key={i}>{el.toString()}</List.Item>
//                     //     // <List.Item>{item.toString()}</List.Item>
//                     // ) */}