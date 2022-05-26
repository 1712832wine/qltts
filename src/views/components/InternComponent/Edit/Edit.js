import { Button } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert'
import ModalForm from '../../ModalForm/ModalForm';
import { items } from '../Data';

const Edit = ({ setRefresh, refresh, item }) => {
    const [visible, setVisible] = useState(false);

    // Submit data to server
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



    return (

        <>
            {console.log("ahiihi")}
            <Button
                className="btn-warning"
                onClick={() => {
                    setVisible(true);
                }}
            >
                Edit
            </Button>
            <ModalForm
                visible={visible}
                onCreate={onEdit}
                okText="Edit"
                title="Edit intern"
                value_before={item}
                onCancel={() => {
                    setVisible(false);
                }}
                items={items}
            />
        </>
    )
}

export default Edit;
