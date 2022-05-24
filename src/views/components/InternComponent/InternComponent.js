import React, { useEffect, useState } from 'react'
import { Table, Button, Tag, Space } from 'antd'
import axios from 'axios'
import Add from "./Add/Add"
import ViewDetail from "./ViewDetail/ViewDetail"


export default function InternComponent() {

    const [interns, setInterns] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/interns')
            .then(res => {
                setInterns(res.data)
            })
            .catch(err => { console.log(err) })
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Start Date',
            dataIndex: 'start_date',
            key: 'start_date',
        },
        {
            title: 'End Date',
            dataIndex: 'end_date',
            key: 'end_date',
        },
        {
            title: 'Result',
            dataIndex: 'result',
            key: 'result',
            render: (item, { result }) => {
                let color = result ? 'green' : 'red'
                return (
                    <Tag color={color} key={item.key} >
                        {result ? 'Đạt' : 'Không Đạt'}
                    </Tag >
                );
            }
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, item) => {
                return (
                    <Space size="middle">
                        <ViewDetail item={item} />
                        <Button className="btn-warning">Edit</Button>
                        <Button type="danger">Delete</Button>
                    </Space>
                );
            },
            width: "50px",
        },
    ];

    return (
        <div>
            <div className="d-flex-between">
                <h1>Intern</h1>
                <Add />
            </div>
            <Table dataSource={interns} rowKey="id" columns={columns} pagination={{ "pageSize": 5 }} />
        </div>
    );
}
