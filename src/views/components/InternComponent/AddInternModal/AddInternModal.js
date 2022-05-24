import { Button, Modal } from 'antd';
import { Form, Input, Select, DatePicker } from 'antd';
import { useState } from 'react';
import React from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;


const SelectCustom = (options) => {
    return (
        <Select initialvalues={options[0].value}>
            {
                options.map(option => {
                    return <Option key={option.value} value={option.value}>{option.text}</Option>
                })
            }
        </Select>
    )
}

const RenderSwitch = (item) => {
    switch (item.type) {
        case 'text':
            return <Input />
        case 'select':
            return SelectCustom(item.options)
        case 'date_range':
            return <RangePicker />
        default:
            break;
    }
};

const CollectionCreateForm = ({ visible, onCreate, onCancel, items }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                {
                    items.map(item => {
                        return (
                            < Form.Item
                                key={item.label}
                                label={item.label}
                                name={item.name}
                                rules={item.rules}
                            >
                                {RenderSwitch(item)}
                            </Form.Item>
                        )
                    })
                }
            </Form>
        </Modal>
    );
};

const AddInternModal = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };


    const items = [
        {
            label: 'Name',
            name: 'name',
            type: 'text',
            rules: [
                {
                    required: true,
                    message: 'Please input your name!',
                },
            ]
        },
        {
            label: 'Phone',
            name: 'phone',
            type: 'text',
            rules: [
                {
                    required: true,
                    message: 'Please input your phone!',
                },
            ]
        },
        {
            label: 'Major',
            name: 'major',
            type: 'text',
        },
        {
            label: 'School Year',
            name: 'school_year',
            type: 'text',
        },
        {
            label: 'CV File',
            name: 'cv_file',
            type: 'text',
        },
        {
            label: 'Date_Range',
            name: 'date_range',
            type: 'date_range',
            rules: [
                {
                    required: true,
                    message: 'Please select date start and date end!',
                },
            ]
        },
        {
            label: 'Result',
            name: 'result',
            type: 'select',
            rules: [
                {
                    required: true,
                    message: 'Please select date start and date end!',
                },
            ],
            options: [
                {
                    value: 'Đạt',
                    text: 'Đạt'
                },
                {
                    value: 'Không đạt',
                    text: 'Không đạt'
                }
            ]
        },
    ]







    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                Add new intern
            </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
                items={items}
            />
        </div>
    )
}

export default AddInternModal;
