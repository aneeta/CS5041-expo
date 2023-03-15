import { useContext, useEffect, useState } from 'react';
import { Input, Form, Select } from 'antd';
import { IngCtx } from '../../../../../Context';


// placeholder data
const type = {
    fresh: ["Meat", "Dairy", "Fruit", "Vegetable"],
    cupboard: ["Grains", "Pasta",]
}

const ingTypes = [
    {
        label: 'Fresh',
        options: [
            { label: "Meat", value: "meat" },
            { label: "Fruit", value: "fruit" },
            { label: "Vegetable", value: "veg" },
            { label: "Dairy", value: "dairy" },
        ]
    },
    {
        label: 'Cupboard',
        options: [
            { label: "Sweeteners", value: "sweeteners" },
        ]
    }
]

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
        setInputs((prev) => ({ ...prev, ...changedValues }));
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
                <Input defaultValue={inputs.name} />
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
                <Select options={ingTypes} defaultValue={inputs.type} />
            </Form.Item>
        </Form>
    )
}