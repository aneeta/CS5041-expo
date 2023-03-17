import { ref, push, child, serverTimestamp } from 'firebase/database'
import { Button, message, Steps, theme } from 'antd';
import { useState, useEffect } from 'react';
import { db, auth, dbSubspace } from '../../../db';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInAnonymously } from "firebase/auth";
import { useList } from 'react-firebase-hooks/database';


function CustomStepper(props) {
    const { token } = theme.useToken();
    const contentStyle = {
        lineHeight: '500px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };
    const [user, authLoading, authError] = useAuthState(auth);

    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    const submitData = () => {
        const path = (props.formName === "Recipe") ? "public" : "private"

        const reference = push(child(user ? ref(db) : null, `/${path}/${user.uid}`), {
            created: serverTimestamp(),
            modified: serverTimestamp(),
            type: "dataFinal",
            message: `${props.formName}`,
            content: JSON.stringify(props.data)
        })

        console.log(reference)


        // const [snapshots, dbLoading, dbError] = useList(user ? ref(db, '/public') : null);


        // message.success('Added!')

        // reset form
        props.clearFunc({})
        setCurrent(0);
    }

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = props.steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return (
        <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{props.steps[current].content}</div>
            <div
                style={{
                    marginTop: 24,
                    float: 'right'
                }}
            >
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
                {current < props.steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === props.steps.length - 1 && (
                    <Button type="primary" onClick={() => submitData()}>
                        Done
                    </Button>
                )}
            </div>
        </>
    );
};
export default CustomStepper;
