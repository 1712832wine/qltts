import React, { useEffect, useState } from 'react'
import PageHeader from '../../PageHeader/PageHeader'
import { Tag } from 'antd'
import { useParams, useNavigate } from 'react-router-dom'
import { apis } from '../../../../API/apis'
import { PAGE_NOT_FOUND, SERVER_ERROR } from '../../../../Constants/const';
import { t } from 'i18next'


const ViewDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        apis.viewIntern(id)
            .then(res => { setItem(res.data) })
            .catch(({ response }) => {
                if (!response.data) {
                    navigate(`/${SERVER_ERROR}`)
                }
                if (response.status === 404) {
                    navigate(`/${PAGE_NOT_FOUND}`)
                }
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const myTag = (result) => {
        let color = result ? 'green' : 'red';
        return (
            <Tag color={color} key={item.key} >
                {result ? t('PASSED') : t('FAILED')}
            </Tag >
        )
    }
    return (
        <div>
            <PageHeader link='/interns' title={t('PAGE_HEADER_DETAIL_INTERN')} subtitle={t('PAGE_HEADER_DETAIL_SUBTITLE')} />
            <div style={{ fontSize: 16 }}>
                <div><b>{t('NAME')}: </b> {item.name}</div>
                <div><b>{t('PHONE')}: </b> {item.phone}</div>
                <div><b>{t('SCHOOL_YEAR')}: </b> {item.school_year}</div>
                <div><b>{t('MAJOR')}: </b> {item.major}</div>
                <div><b>{t('START_DATE')}: </b> {item.start_date}</div>
                <div><b>{t('END_DATE')}: </b> {item.end_date}</div>
                <div><b>{t('RESULT')}: </b> {myTag(item.result)}</div>
            </div>
        </div >
    )
}


export default ViewDetail;
