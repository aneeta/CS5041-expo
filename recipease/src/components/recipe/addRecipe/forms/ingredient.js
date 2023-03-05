import { useEffect, useState } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
    Input,
    Button,
    Checkbox,
    Col,
    Form,
    InputNumber,
    Radio,
    Rate,
    Row,
    Select,
    Slider,
    Switch,
    Upload,
} from 'antd';

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

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const onFinish = (values) => {
    console.log('Received values of form: ', values);
};

export default function InfoForm(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (changedValues) => {

        // const key = Object.keys(changedValues)
        // const val = Object.values(changedValues)
        setInputs((prev) => ({ ...prev, ...changedValues }));
        // props.onInputChange(state);
    }

    useEffect(() => {
        console.log(inputs)
    }, [inputs])

    return (
        <Form
            name="infoForm"
            {...formItemLayout}
            onFinish={onFinish}
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
                <Input />
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
                <Select>
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
                <Select mode="multiple">
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
                <Select mode="multiple">
                    {occasion.map((el, i) => <Option value={el} key={el}>{el}</Option>)}
                </Select>
            </Form.Item>

            <Form.Item label="Cover Image" name="cover">
                <Form.Item valuePropName="fileList" getValueFromEvent={normFile} noStyle>
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