import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button } from 'antd'

import Delete from "./Delete/Delete"
import ViewDetail from "./ViewDetail/ViewDetail"
import { Link } from 'react-router-dom';
// import ModalForm from '../../ModalForm/ModalForm'

import axios from 'axios'

export default function InternComponent() {
    const [interns, setInterns] = useState([]);
    const [refresh, setRefresh] = useState(0);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/interns')
            .then(res => {
                setInterns(res.data)
            })
            .catch(err => { console.log(err) })
    }, [refresh]);

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

                        <Link to={`${item.id}`}>
                            <Button type="primary">
                                View
                            </Button>
                        </Link>
                        <Button
                            className="btn-warning"
                            onClick={() => {

                            }}
                        >
                            Edit
                        </Button>
                        <Delete refresh={refresh} setRefresh={setRefresh} item={item} />
                    </Space >
                );
            },
            width: "50px",
        },
    ];

    return (
        <div>
            <div className="d-flex-between">
                <h1>Intern</h1>
                <Button
                    type="primary"
                    onClick={() => {
                    }}
                >
                    Edit
                </Button>
            </div>
            <Table dataSource={interns} rowKey="id" columns={columns} pagination={{ "pageSize": 5 }} />

            {/* <ModalForm
                visible={visible}
                type={onEdit}
                okText="Edit"
                title="Edit intern"
                edit_item={edit_item}
                onCancel={() => {
                    setVisible(false);
                }}
                fields={fields}
            /> */}
        </div>
    );
}
