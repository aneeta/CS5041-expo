import { useContext, useEffect, useState } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Input, Form, Select, Upload } from 'antd';
import { RecipeCtx } from '../../../../../Context';
import RECIPE_TYPES from '../../typeList';

RECIPE_TYPES

// schema
const cuisines = RECIPE_TYPES.cuisines
const meals = RECIPE_TYPES.meals
const occasion = RECIPE_TYPES.occasion

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },

    padding: 10
};


export default function InfoForm() {
    const { inputs, setInputs } = useContext(RecipeCtx);

    // const [form] = Form.useForm();

    const handleChange = (changedValues) => {
        setInputs((prev) => ({ infoForm: { ...prev.infoForm, ...changedValues } }));
    }

    useEffect(() => {
        // changeFunc(inputs)
    }, [inputs])


    return (
        <Form
            name="infoForm"
            // form={form}
            {...formItemLayout}
            onValuesChange={handleChange}
            style={{ maxWidth: 700, margin: 20, alignItems: 'center' }}>

            <Form.Item
                name="name"
                label="Recipe Name"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please choose recipe name!',
                    },
                ]}>
                <Input initialValue={inputs.infoForm?.name} />
            </Form.Item>

            <Form.Item
                name="meal"
                label="Meal"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please choose meal type!',
                    },
                ]}
            >
                <Select initialValue={inputs.infoForm?.meal}>
                    {meals.map((el, i) => <Option value={el} key={el}>{el}</Option>)}
                </Select>
            </Form.Item>

            <Form.Item
                name="cuisines"
                label="Select cuisine(s)"
                rules={[
                    {
                        required: true,
                        message: 'Please choose recipe cuisine(s)!',
                        type: 'array',
                    },
                ]}
            >
                <Select mode="multiple" initialValue={inputs.infoForm?.cuisines}>
                    {cuisines.map((el, i) => <Option value={el} key={el}>{el}</Option>)}
                </Select>
            </Form.Item>

            <Form.Item
                name="occasions"
                label="Select occasion(s)"
                rules={[
                    {
                        required: true,
                        message: 'Please choose recipe occasion(s)!',
                        type: 'array',
                    },
                ]}
            >
                <Select mode="multiple" initialValue={inputs.infoForm?.occasions}>
                    {occasion.map((el, i) => <Option value={el} key={el}>{el}</Option>)}
                </Select>
            </Form.Item>

            <Form.Item
                name="cover"
                label="Cover Image URL"
            >
                <Input initialValue={inputs.infoForm?.cover} />
            </Form.Item>
        </Form >
    )
}