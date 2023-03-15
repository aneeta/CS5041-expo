import { Divider, List, Typography } from 'antd';
import { Table } from 'antd';
import { Descriptions } from 'antd';
import { useContext } from 'react';
import { RecipeCtx } from '../../../../../Context';

export default function FormSummary(props) {
    const { inputs, setInputs } = useContext(RecipeCtx);

    const ingCols = [
        {
            title: 'Ingredient',
            dataIndex: 'ing',
            key: 'ing'
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount'
        }
    ]

    return (
        <>
            <Descriptions title="Recipe Info">
                {Object.entries(inputs.infoForm).map(
                    ([k, v], i) => <Descriptions.Item label={k.toUpperCase()} key={k}>{v.toString()}</Descriptions.Item>)}
            </Descriptions>
            <Descriptions title="Ingredients">
                <Descriptions.Item>
                    <Table
                        dataSource={inputs.ingData}
                        columns={ingCols}

                    />

                </Descriptions.Item>
                {/* {Object.entries().map(
                    ([k, v], i) => <Descriptions.Item label={v.toUpperCase()} key={i}>{v.amount.toString()}</Descriptions.Item>)} */}
            </Descriptions>
            <Descriptions title="Method">
                <List
                    dataSource={inputs.method}
                    renderItem={
                        (item) => (
                            <List.Item>
                                {item.step}
                            </List.Item>
                        )
                    }
                />
                {/* {Object.entries(inputs.method).map(
                    ([k, v], i) => <Descriptions.Item label={k.toUpperCase()} key={i}>{v.step.toString()}</Descriptions.Item>)} */}
            </Descriptions>
        </>
        // <Divider orientation="left">Ingredient Info</Divider>

    )
}
