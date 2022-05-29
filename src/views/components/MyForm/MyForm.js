import React, { useEffect } from 'react';
import { Button, Form, Input, Select, DatePicker, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';

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
        if (value_before_edit) {
            form.setFieldsValue({
                ...value_before_edit,
                date_range: [moment(value_before_edit.start_date), moment(value_before_edit.end_date)]
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value_before_edit]);

    const dateFormat = 'YYYY-MM-DD';

    const onFinish = (values) => {
        onSubmit(values)
    };

    const onReset = () => {
        form.resetFields();
    };

    const props = {
        name: 'file',
        action: 'http://127.0.0.1:8000/upload/files',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
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
            case 'file':
                return (
                    <Upload {...props} beforeUpload={() => false}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                )

            default:
                break;
        }
    };
    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}
            initialValues={value_before_edit ? {} : {}}

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