import { useContext, useEffect, useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space, AutoComplete } from 'antd';
import { RecipeCtx } from '../../../../../Context';

// placeholder data

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 14,
    },

    padding: 10
};



export default function MethodForm() {
    const { inputs, setInputs } = useContext(RecipeCtx);

    const handleChange = (changedValues) => {
        const current = form.getFieldValue();
        setInputs((prev) => ({ ...prev, ...current }));
    }

    useEffect(() => {
        console.log(inputs)
    }, [inputs])

    const [form] = Form.useForm();

    return (
        <Form
            name="methodForm"
            {...formItemLayout}
            form={form}
            onValuesChange={handleChange}
            style={{ maxWidth: 700, margin: 20, alignItems: 'center' }}>

            <Form.List name="method">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field) => (
                            <Space key={field.key} align="baseline">
                                <Form.Item>
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
                                    <Input style={{ width: 400 }} />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Space>
                        ))}

                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add step
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Form>
    )
}