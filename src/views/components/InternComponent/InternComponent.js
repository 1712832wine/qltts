import React from 'react'
import { Table, Button, Tag, Space } from 'antd'

import AddInternModal from "./AddInternModal/AddInternModal"


export default function InternComponent() {
    const dataSource = [
        {
            key: '1',
            name: 'Trí',
            phone: '0901410230',
            major: 'IT',
            school_year: 3,
            cv_file: 'abc.txt',
            start_date: '1/1/2020',
            end_date: '2/3/2020',
            result: true,
        },
        {
            key: '2',
            name: 'Trí',
            phone: '0901410230',
            major: 'IT',
            school_year: 3,
            cv_file: 'abc.txt',
            start_date: '1/1/2020',
            end_date: '2/3/2020',
            result: false,
        },
        {
            key: '3',
            name: 'Trí',
            phone: '0901410230',
            major: 'IT',
            school_year: 3,
            cv_file: 'abc.txt',
            start_date: '1/1/2020',
            end_date: '2/3/2020',
            result: false,
        },
        {
            key: '4',
            name: 'Trí',
            phone: '0901410230',
            major: 'IT',
            school_year: 3,
            cv_file: 'abc.txt',
            start_date: '1/1/2020',
            end_date: '2/3/2020',
            result: false,
        },
        {
            key: '5',
            name: 'Trí',
            phone: '0901410230',
            major: 'IT',
            school_year: 3,
            cv_file: 'abc.txt',
            start_date: '1/1/2020',
            end_date: '2/3/2020',
            result: false,
        },
        {
            key: '6',
            name: 'Trí',
            phone: '0901410230',
            major: 'IT',
            school_year: 3,
            cv_file: 'abc.txt',
            start_date: '1/1/2020',
            end_date: '2/3/2020',
            result: false,
        },
        {
            key: '7',
            name: 'Trí',
            phone: '0901410230',
            major: 'IT',
            school_year: 3,
            cv_file: 'abc.txt',
            start_date: '1/1/2020',
            end_date: '2/3/2020',
            result: false,
        },
        {
            key: '8',
            name: 'Trí',
            phone: '0901410230',
            major: 'IT',
            school_year: 3,
            cv_file: 'abc.txt',
            start_date: '1/1/2020',
            end_date: '2/3/2020',
            result: false,
        },
    ];

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
                        <Button type="primary">View</Button>
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
                <AddInternModal />
            </div>
            <Table dataSource={dataSource} columns={columns} pagination={{ "pageSize": 5 }} />
        </div>
    );
}
