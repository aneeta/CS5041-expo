import { useContext, useState, useEffect } from 'react';
import { remove, set } from 'firebase/database'

import { Button, Divider, Table } from "antd";
import { Context } from "../../Context";
import BaseLayout from "../components/base/Layout";


const BrowseIngPage = (props) => {

    const { sessionData, setSessionData } = useContext(Context);

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
        }
    ];


    const clearList = () => {
        if (sessionData.ingredients) {
            sessionData.ingredients.forEach(el => { remove(el.ref) });
            // sessionData.privRef.remove()
            // set(sessionData.privRef, [])
            // )
            //     .then(message.success("Cleared list!"))
            //     .catch(message.error("Clear failed!"))
        }
    }

    return (
        <BaseLayout>
            <Divider orientation="right">Shopping List</Divider>

            {/* rowSelection={rowSelection} */}
            <Table columns={columns} dataSource={sessionData.ingredients?.map((el, _) => el.val()).map((el, i) => JSON.parse(el.content))
                // .flatMap((el) => Object.values(el))
                // .filter(el => ((el.type === "dataFinal")))
                // .flatMap((el) => JSON.parse(el.content))} 
            }
            />

            <Button onClick={() => clearList()}>Clear</Button>

        </BaseLayout>

    )
}

export default BrowseIngPage;
