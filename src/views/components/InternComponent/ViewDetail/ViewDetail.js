import React from 'react';
import PageHeader from '../../PageHeader/PageHeader';
import { useParams } from 'react-router-dom'
const ViewDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <PageHeader link='/interns' title='Intern Detail Page' subtitle='This page includes information of an intern' />
            <div>
                <b>Name: {id}</b>
            </div>
        </div>
    );
}

export default ViewDetail;
