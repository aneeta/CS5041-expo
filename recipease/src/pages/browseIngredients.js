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
import { Descriptions } from "antd";
const { SHOW_PARENT } = TreeSelect;

const BrowseIngPage = (props) => {

    const { sessionData, setSessionData } = useContext(Context);

    const getIdxCat = (cat) => {
        if (cat === ING_TYPES[0].label) {
            // setTag(ING_TYPES[0].label)
            return 0
        } else if (cat === ING_TYPES[1].label) {
            return 1
        } else {
            return 2
        }
    }
    const getIdxType = (cat, type) => {
        const types = treeData[getIdxCat(cat)].children.flatMap((el) => el.title);
        return types.indexOf(type)
    }

    const treeDataTest = [{
        title: "test",
        value: "test",
        key: "test",
        children: [
            {
                title: "test1",
                value: "test1",
                key: "test1",
            },
            {
                title: "test2",
                value: "test2",
                key: "test2",
            }
        ]
    }]





    // const [treeData, setTreeData] = useState(
    //     ING_TYPES.flatMap((el) => (
    //         {
    //             title: el.label,
    //             // value: el.label,
    //             key: el.label,
    //             children: el.options.flatMap((it) => (
    //                 {
    //                     title: it.label,
    //                     // value: it.label,
    //                     key: it.label,
    //                     children: []
    //                     // .filter((el) => Boolean(el.cat))

    //                 }
    //             ))
    //         }
    //     )))

    // useEffect(() => {
    //     setTreeData(
    //         ING_TYPES.flatMap((el) => (
    //             {
    //                 title: el.label,
    //                 // value: el.label,
    //                 key: el.label,
    //                 children: el.options.flatMap((it) => (
    //                     {
    //                         title: it.label,
    //                         // value: it.label,
    //                         key: it.label,
    //                         children: sessionData.allSnapshots?.map((el, _) => el.val())
    //                             .flatMap((el) => Object.values(el)).flat()
    //                             .filter(el => ((el.type === "data") && (el.message == "Ingredients")))
    //                             .flatMap((el) => JSON.parse(el.content))
    //                             .map((el, _) => ({
    //                                 title: el.name,
    //                                 value: el.name,
    //                                 key: el.name,
    //                             }))
    //                         // .filter((el) => Boolean(el.cat))

    //                     }
    //                 ))
    //             }
    //         ))
    //     )
    // }, [sessionData])

    // console.log("treeData", treeData)





    // const treeDataFresh = ING_TYPES.filter(el => (el.label === "Fresh")).options.flatMap((it) => (

    //     flatMap((el) => (
    //         {
    //             title: el.label,
    //             value: el.label.toLowerCase(),
    //             key: el.label.toLowerCase(),
    //             children: el
    //         }
    //     ))

    // const data = sessionData.allSnapshots.map((el, _) => el.val())
    //     .map((el, i) => Object.values(el)).flat()
    //     .filter(el => ((el.type === "data") && (el.message == "Ingredient")))
    //     .map((el, _) => JSON.parse(el.content))
    //     .forEach(el => tree);

    // const [myings, setMyIngs] = useState(sessionData.myIngs);
    const [myings, setMyIngs] = useState(
        []
    );

    const onChange = (values) => {
        setMyIngs(values)
        // setSessionData((prev) => ({ ...prev, ...{ userIng: myIngs } }))
    }

    // sessionData.allSnapshots.map((el, _) => el.val())
    //     .flatMap((el) => Object.values(el)).flat()
    //     .filter(el => ((el.type === "data") && (el.message == "Ingredients")))
    //     .flatMap((el) => JSON.parse(el.content))
    //     .forEach(el => {
    //         treeData[getIdxCat(el.cat)]?.children[getIdxType(el.cat, el.type)]?.children.push(el.name)
    //     })

    // console.log(
    //     sessionData.allSnapshots?.map((el, _) => el.val())
    //         .flatMap((el) => Object.values(el)).flat()
    //         .filter(el => ((el.type === "data") && (el.message == "Ingredients")))
    //         .flatMap((el) => JSON.parse(el.content))
    // )

    const columns = [
        {
            title: 'Category',
            dataIndex: 'cat',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Ingredient',
            dataIndex: 'name',
        },
    ];

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE
        ]
    };

    return (
        <BaseLayout>
            {/* rowSelection={rowSelection} */}
            <Table columns={columns} dataSource={sessionData.snapshots?.map((el, _) => el.val())
                .flatMap((el) => Object.values(el)).flat()
                .filter(el => ((el.type === "data") && (el.message == "Ingredients")))
                .flatMap((el) => JSON.parse(el.content))} />
        </BaseLayout>

    )

    // const tProps = {
    //     treeData,
    //     myings,
    //     onChange,
    //     treeCheckable: true,
    //     showCheckedStrategy: SHOW_PARENT,
    //     placeholder: 'Please select',
    //     style: {
    //         width: '100%',
    //     },
    // };

    // const [user, authLoading, authError] = useAuthState(auth);
    // signInAnonymously(auth);

    // // useEffect(() => {
    // //     signInAnonymously(auth);
    // // }, []);

    // console.log(user)

    // const [snapshots, dbLoading, dbError] = useListVals(user ? ref(db, `/public/${user.uid}`) : null);

    // console.log(snapshots)

    // const data = snapshots.map((el, _) => el.val());
    // const out = data.filter(el => ((el.type === "recipeaseData") && (el.message("Ingredients"))))
    // const data = Object.fromEntries(Object.entries(snapshots.flatMap(el => el.val())).filter(([]) => key.includes('Name')))
    // Object.filter()

    // const onChange = (value) => {
    //     // setSessionData((prev) => ({...prev, {availableIng: }}))
    // }

    // return (
    //     <BaseLayout>
    //         <Descriptions title="Fresh">
    //             <Descriptions.Item>

    //             </Descriptions.Item>
    //         </Descriptions>
    //         <Descriptions title="Cupboard">
    //             <Descriptions.Item>

    //             </Descriptions.Item>
    //         </Descriptions>
    //         <Descriptions title="Other">
    //             <Descriptions.Item>

    //             </Descriptions.Item>
    //         </Descriptions>

    //         {/* {console.log(sessionData.allSnapshots?.map((el, _) => el.val())
    //             .map((el, i) => Object.values(el)).flat()
    //             .filter(el => ((el.type === "data") && (el.message == "Ingredients")))
    //             .map((el, _) => JSON.parse(el.content)))}
    //         <TreeSelect {...tProps} /> */}
    //         {/* {console.log(myings)} */}
    //     </BaseLayout>
    // )


    // return (
    //     <BaseLayout>
    //         <Form
    //             labelCol={{ span: 4 }}
    //             wrapperCol={{ span: 20 }}
    //             layout="horizontal"
    //         // initialValues={sessionData.userIng}
    //         // onValuesChange={onChange}
    //         >
    //             {ING_TYPES.flatMap((el) =>
    //                 <>
    //                     <Divider />
    //                     <Form.Item name={el.label.toLowerCase()} label={el.label}>
    //                         <Checkbox.Group>

    //                             {<>
    //                                 <Row>
    //                                     {el.options.slice(0, 4).map((it, i) => (
    //                                         <Col key={i} span={10}>
    //                                             <Checkbox value={it.value}>{it.label}</Checkbox>
    //                                         </Col>
    //                                     ))}
    //                                 </Row>
    //                                 <Row>
    //                                     {el.options.slice(4).map((it, i) => (
    //                                         <Col key={i} span={20}>
    //                                             <Checkbox value={it.value}>{it.label}</Checkbox>
    //                                         </Col>
    //                                     ))}
    //                                 </Row>
    //                             </>
    //                             }
    //                         </Checkbox.Group>
    //                     </Form.Item>
    //                 </>
    //             )}
    //             <Divider />
    //         </Form>
    //     </BaseLayout >
    // )
}

export default BrowseIngPage;
