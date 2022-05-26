import { Modal } from 'antd';
import { Form, Input, Select, DatePicker } from 'antd';
import React from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;

const ModalForm = ({ visible, onCreate, onCancel, items, title, okText, value_before }) => {

    const [form] = Form.useForm();

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
                console.log(value_before)
                return <Input value={value_before} />
            case 'select':
                return SelectCustom(item.options)
            case 'date_range':
                return <RangePicker />
            default:
                break;
        }
    };

    return (
        <Modal
            visible={visible}
            title={title}
            okText={okText}
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

export default ModalForm;
