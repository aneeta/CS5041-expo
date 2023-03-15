import { useContext, useEffect, useState } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Input, Form, Select, Upload } from 'antd';
import { RecipeCtx } from '../../../../../Context';


// placeholder data
const cuisines = ["Thai", "Indian", "French", "American", "Chinese", "Turkish", "Mexican"]
const meals = ["Breakfast", "Brunch", "Lunch", "Dinner", "Dessert", "Snack"]
const occasion = ["Christmas", "Birthday", "Halloween", "Valentines", "Thanksgiving"]

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
                <Input defaultValue={inputs.infoForm?.name} />
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
                <Select defaultValue={inputs.infoForm?.meal}>
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
                <Select mode="multiple" defaultValue={inputs.infoForm?.cuisines}>
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
                <Select mode="multiple" defaultValue={inputs.infoForm?.occasions}>
                    {occasion.map((el, i) => <Option value={el} key={el}>{el}</Option>)}
                </Select>
            </Form.Item>

            <Form.Item label="Cover Image" name="cover">
                <Form.Item noStyle>
                    <Upload.Dragger maxCount="1" accept="image" name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Choose Recipe Cover</p>
                        {/* <p className="ant-upload-hint">Support for a single or bulk upload.</p> */}
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
        </Form>
    )
}