import React, { useEffect, useState } from 'react'
import PageHeader from '../../PageHeader/PageHeader'
import { Tag } from 'antd'
import { useParams, useNavigate } from 'react-router-dom'
import { apis } from '../../../../API/apis'


const ViewDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        apis.viewIntern(id)
            .then(res => { setItem(res.data) })
            .catch(({ response }) => {
                if (!response.data) {
                    navigate('/500')
                }
                if (response.status === 404) {
                    navigate('/404')
                }
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const myTag = (result) => {
        let color = result ? 'green' : 'red';
        return (
            <Tag color={color} key={item.key} >
                {result ? 'Đạt' : 'Không Đạt'}
            </Tag >
        )
    }
    return (
        <div>
            <PageHeader link='/interns' title='Intern Detail Page' subtitle='This page includes information of an intern' />
            <div style={{ fontSize: 16 }}>
                <div><b>Name: </b> {item.name}</div>
                <div><b>Phone: </b> {item.phone}</div>
                <div><b>School year: </b> {item.school_year}</div>
                <div><b>Major: </b> {item.major}</div>
                <div><b>Start date: </b> {item.start_date}</div>
                <div><b>End date: </b> {item.end_date}</div>
                <div><b>Result: </b> {myTag(item.result)}</div>
            </div>
        </div >
    )
}


export default ViewDetail;
