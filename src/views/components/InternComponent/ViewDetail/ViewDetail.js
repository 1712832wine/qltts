import React, { useEffect, useState } from 'react'
import PageHeader from '../../PageHeader/PageHeader'
import { Tag } from 'antd'
import { useParams } from 'react-router-dom'
import { apis } from '../../../../API/apis'


const ViewDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        apis.viewIntern(id)
            .then(res => { setItem(res.data) })
            .catch(err => { console.log("error") })
    }, [id]);
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
                <div><b>Start date: </b> {item.start_date}</div>
                <div><b>End date: </b> {item.end_date}</div>
                <div><b>Result: </b> {myTag(item.result)}</div>
            </div>

        </div>
    );
}

export default ViewDetail;
