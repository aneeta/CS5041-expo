import { useContext, useEffect, useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space, AutoComplete } from 'antd';
import { RecipeCtx } from '../../../../../Context';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

// placeholder data
const ingredients = [{ value: "Carrot" }, { value: "Butter" }, { value: "Flour" }]
const units = ["g", "tsp", "tbsp", "cup"]

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


export default function IngForm() {
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
            name="ingForm"
            {...formItemLayout}
            form={form}
            onValuesChange={handleChange}
            style={{ maxWidth: 700, margin: 20, alignItems: 'center' }}>

            <Form.List name="ingData">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field) => (
                            <Space key={field.key} align="baseline">
                                <Form.Item >
                                </Form.Item>
                                <Form.Item
                                    {...field}
                                    label="Ingredient"
                                    name={[field.key, 'ing']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing ingredient name',
                                        },
                                    ]}
                                >
                                    <AutoComplete
                                        style={{ width: 130 }}
                                        options={ingredients}
                                        placeholder="Type ingredient"
                                        filterOption={(inputValue, option) =>
                                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        }
                                    />
                                    {/* <Select
                                        style={{
                                            width: 130,
                                        }}
                                    >
                                        {ingredients.map((el, i) => <Option value={el} key={el}>{el}</Option>)}
                                    </Select> */}
                                </Form.Item>
                                <Form.Item
                                    {...field}
                                    label="Amount"
                                    name={[field.key, 'amount']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing amount',
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