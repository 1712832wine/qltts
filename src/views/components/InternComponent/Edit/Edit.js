import React, { useEffect, useState } from 'react'
import MyForm from '../../MyForm/MyForm';
import { fields } from '../FieldsData';
import PageHeader from '../../PageHeader/PageHeader';
import { apis } from '../../../../API/apis';
import swal from 'sweetalert';
import { useNavigate, useParams } from "react-router-dom";
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { INTERNS, PAGE_NOT_FOUND, SERVER_ERROR } from '../../../../Constants/const';

export default function Edit() {
    const { t } = useTranslation();
    const { id } = useParams();
    const [value_before_edit, setValue] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        apis.viewIntern(id)
            .then(res => {
                setValue(res.data)
            })
            .catch(() => {
                console.log("Get item edit failed")
            })
    }, [id]);

    const onSubmit = (values) => {
        values.start_date = moment.utc(values.date_range[0]).format('YYYY-MM-DD')
        values.end_date = moment.utc(values.date_range[1]).format('YYYY-MM-DD')
        apis.editIntern(id, values)
            .then(() => {
                swal({
                    title: t('SUCCESS'),
                    text: t('EDIT_SUCCESS'),
                    icon: "success",
                }).then(() => {
                    navigate(`/${INTERNS}`)
                })
            })
            .catch(({ response }) => {
                if (response.data) {
                    swal({
                        title: t('ERROR'),
                        text: response.data.message,
                        icon: "error",
                    }).then(() => { })
                } else {
                    if (!response.data) {
                        navigate(`/${SERVER_ERROR}`)
                    }
                    if (response.status === 404) {
                        navigate(`/${PAGE_NOT_FOUND}`)
                    }
                }
            })
    }
    return (
        <div>
            <PageHeader link={`/${INTERNS}`} title={t('PAGE_HEADER_EDIT_INTERN')} subtitle={t('PAGE_HEADER_EDIT_INTERN_SUBTITLE')} />
            <MyForm fields={fields} onSubmit={onSubmit} value_before_edit={value_before_edit}></MyForm>
        </div>
    )
}
