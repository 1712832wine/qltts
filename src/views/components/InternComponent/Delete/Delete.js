import React from 'react'
import swal from 'sweetalert'
import { Button } from 'antd'
import { apis } from '../../../../API/apis'
import { DeleteOutlined } from '@ant-design/icons'

export default function Delete({ item, refresh, setRefresh }) {

    const deleteItem = (item) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure want to delete this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    apis.deleteIntern(item.id)
                        .then(res => {
                            swal("Good job!", "Delete successfully!", "success");
                            setRefresh(!refresh);
                        })
                        .catch(err => { console.log(err) })
                } else {
                }
            });

    }

    return (
        <Button type="danger" onClick={() => deleteItem(item)} icon={<DeleteOutlined />}></Button>
    )
}
