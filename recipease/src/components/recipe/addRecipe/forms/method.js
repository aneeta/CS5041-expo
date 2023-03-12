import { useEffect, useState } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space, AutoComplete } from 'antd';

// placeholder data
const ingredients = [{ value: "Carrot" }, { value: "Butter" }, { value: "Flour" }]
const units = ["g", "tsp", "tbsp", "cup"]

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        span: 8,
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

export default function MethodForm(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (changedValues) => {
        setInputs((prev) => ({ ...prev, ...changedValues }));
    }

    useEffect(() => {
        console.log(inputs)
    }, [inputs])

    return (
        <Form
            name="methodForm"
            {...formItemLayout}
            onFinish={onFinish}
            onValuesChange={handleChange}
            style={{ maxWidth: 700, margin: 20, alignItems: 'center' }}>

            <Form.List name="Ingredient">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field) => (
                            <Space key={field.key} align="baseline">
                                <Form.Item >
                                </Form.Item>
                                <Form.Item
                                    {...field}
                                    label="Method"
                                    name={[field.name, 'method']}
                                >
                                </Form.Item>
                                <Form.Item
                                    {...field}
                                    label="Step"
                                    name={[field.name, 'step']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Explain step',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Space>
                        ))}

                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add ingredients
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Form>
    )
}