import React from 'react'
import swal from 'sweetalert'
import axios from 'axios'
import { Button } from 'antd'

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
                    axios.delete(`http://127.0.0.1:8000/interns/${item.id}`)
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
        <Button type="danger" onClick={() => deleteItem(item)}>Delete</Button>
    )
}
