/*

import { Modal } from 'antd';
import { Form, Input, Select, DatePicker } from 'antd';
import React from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;

const ModalForm = ({ visible, onCancel, fields, title, okText, value_before }) => {

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
    axios.post('http://127.0.0.1:8000/interns', values)
            .then(res => {
                console.log(res)
                swal("Good job!", "You created a new intern successfully!", "success");
                setRefresh(!refresh);
            })
            .catch(err => { console.log(err) })
    
    const onEdit = (values) => {
        axios.put(`http://127.0.0.1:8000/interns/${item.id}`)
            .then(res => {
                console.log(res)
                swal("Good job!", "You edit successfully!", "success");
                setRefresh(!refresh);
            })
            .catch(err => { console.log(err) })
        setVisible(false);

    };
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
                    fields.map(item => {
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


*/