import { Button } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert'
import ModalForm from '../../ModalForm/ModalForm';
import { items } from '../Data';

const Add = ({ setRefresh, refresh }) => {
    const [visible, setVisible] = useState(false);

    // Submit data to server
    const onCreate = (values) => {
        console.log(values)
        axios.post('http://127.0.0.1:8000/interns', values)
            .then(res => {
                console.log(res)
                swal("Good job!", "You created a new intern successfully!", "success");
                setRefresh(!refresh);
            })
            .catch(err => { console.log(err) })
        setVisible(false);

    };



    return (
        <>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                Add new intern
            </Button>
            <ModalForm
                visible={visible}
                onCreate={onCreate}
                okText="Create"
                title="Add new intern"
                onCancel={() => {
                    setVisible(false);
                }}
                items={items}
            />
        </>
    )
}

export default Add;
