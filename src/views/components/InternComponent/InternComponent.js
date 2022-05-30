import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button } from 'antd'
import { EditOutlined, EyeOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import Delete from "./Delete/Delete"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { apis } from '../../../API/apis';

export default function InternComponent() {
    const { t } = useTranslation();
    const [interns, setInterns] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
            .catch(({ response }) => {
                if (!response.data) {
                    navigate('/500')
                }
                if (response.status === 404) {
                    navigate('/404')
                }
            })
    }

    useEffect(() => {
        fetchData({
            pagination,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    const columns = [
        {
            title: t('NAME'),
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: t('PHONE'),
            dataIndex: 'phone',
            key: 'phone',
            responsive: ['lg'],
        },
        {
            title: t('START_DATE'),
            dataIndex: 'start_date',
            key: 'start_date',
            responsive: ['lg'],
        },
        {
            title: t('END_DATE'),
            dataIndex: 'end_date',
            key: 'end_date',
            responsive: ['lg'],
        },
        {
            title: t('RESULT'),
            dataIndex: 'result',
            key: 'result',
            render: (item, { result }) => {
                let color = result ? 'green' : 'red'
                return (
                    <Tag color={color} key={item.key} >
                        {result ? t('PASSED') : t('FAILED')}
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
                <h1>{t('INTERN')}</h1>

                <Link to='create'>
                    <Button type="primary">
                        {t('CREATE_A_NEW_INTERN')}
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
