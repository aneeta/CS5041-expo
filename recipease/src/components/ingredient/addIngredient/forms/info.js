import { useContext, useEffect, useState } from 'react';
import { Input, Form, Select, Tag } from 'antd';
import { IngCtx } from '../../../../../Context';
import ING_TYPES from '../../ingList'

Text
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },

    padding: 10
};


export default function InfoForm(props) {
    const { inputs, setInputs } = useContext(IngCtx);

    const handleChange = (changedValues) => {
        const changed = { ...{ cat: displayTag() }, ...changedValues }
        setInputs((prev) => ({ ...prev, ...changed }));
    }

    const displayTag = () => {
        const inFresh = ING_TYPES[0].options.flatMap((el) => (el.value)).includes(inputs.type);
        const inCupboard = ING_TYPES[1].options.flatMap((el) => (el.value)).includes(inputs.type);
        if (inFresh) {
            return ING_TYPES[0].label
        } else if (inCupboard) {
            return ING_TYPES[1].label
        } else {
            return ING_TYPES[2].label
        }
    }

    return (
        <Form
            name="infoForm"
            {...formItemLayout}
            onValuesChange={handleChange}
            style={{ maxWidth: 700, margin: 20, alignItems: 'center' }}>

            <Form.Item
                name="name"
                label="Ingredient Name"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please choose ingredient name!',
                    },
                ]}>
                <Input initialValue={inputs.name} />
            </Form.Item>

            <Form.Item
                name="type"
                label="Type"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please choose ingredient type!',
                    },
                ]}
            >
                <Select options={ING_TYPES} initialValue={inputs.type} />
            </Form.Item>
            <Form.Item
                name="cat"
                label="Category"
            >
                <Tag>{displayTag()}
                </Tag>
            </Form.Item>
        </Form>
    )
}