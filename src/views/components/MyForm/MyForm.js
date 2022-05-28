import React, { useEffect } from 'react';
import moment from 'moment';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/vi_VN';

const { Option } = Select;
const { RangePicker } = DatePicker;
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 20,
    },
};

const MyForm = ({ fields, value_before_edit, onSubmit }) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue(value_before_edit)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value_before_edit]);

    const dateFormat = 'YYYY-MM-DD';

    const onFinish = (values) => {
        onSubmit(values)
    };

    const onReset = () => {
        form.resetFields();
    };

    const SwitchInputType = (field) => {
        switch (field.type) {
            case 'text':
                return <Input />
            case 'select':
                return (
                    <Select>
                        {
                            field.options.map(option => {
                                return <Option key={option.value} value={option.value}>{option.text}</Option>
                            })
                        }
                    </Select>
                )
            case 'date_range':
                return <RangePicker format={dateFormat} />
            default:
                break;
        }
    };
    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}
            initialValues={value_before_edit ? {

            } : {}}

        >
            {
                fields.map(field => {
                    return (
                        <Form.Item
                            key={field.label}
                            label={field.label}
                            name={field.name}
                            rules={field.rules}

                        >
                            {SwitchInputType(field)}
                        </Form.Item>
                    )
                })
            }
            < Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" className="mr-8">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item >
        </Form >
    );
};

export default MyForm;