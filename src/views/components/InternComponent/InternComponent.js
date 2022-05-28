import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button } from 'antd'
import { EditOutlined, EyeOutlined } from '@ant-design/icons'

import Delete from "./Delete/Delete"
import { Link } from 'react-router-dom';

import { apis } from '../../../API/apis';

export default function InternComponent() {
    const [interns, setInterns] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
    });
    const [loading, setLoading] = useState(false);


    const fetchData = (params = {}) => {
        setLoading(true);
        apis.getInterns(params.pagination?.current)
            .then(res => {
                setLoading(false);
                setInterns(res.data.data)
                setPagination({
                    ...params.pagination,
                    total: res.data.total,
                });
            })
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        fetchData({
            pagination,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            responsive: ['lg'],
        },
        {
            title: 'Start Date',
            dataIndex: 'start_date',
            key: 'start_date',
            responsive: ['lg'],
        },
        {
            title: 'End Date',
            dataIndex: 'end_date',
            key: 'end_date',
            responsive: ['lg'],
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
            responsive: ['md'],
            render: (_, item) => {
                return (
                    <Space size="small">

                        <Link to={`${item.id}`}>
                            <Button type="primary" icon={<EyeOutlined />}>
                            </Button>
                        </Link>
                        <Link to={`edit/${item.id}`}>
                            <Button className="btn-warning" icon={<EditOutlined />}>

                            </Button>
                        </Link>
                        <Delete refresh={refresh} setRefresh={setRefresh} item={item} />
                    </Space >
                );
            },
            width: "50px",
        },
    ];


    const handleTableChange = (newPagination) => {
        fetchData({ pagination: newPagination, });
    };

    return (
        <div>
            <div className="d-flex-between">
                <h1>Intern</h1>

                <Link to='create'>
                    <Button type="primary">
                        Create a new intern
                    </Button>
                </Link>
            </div>

            <Table
                dataSource={interns}
                rowKey="id"
                columns={columns}
                pagination={pagination}
                onChange={handleTableChange}
                loading={loading}
            />
        </div >
    );
}
