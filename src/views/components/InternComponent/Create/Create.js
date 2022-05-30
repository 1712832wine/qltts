import React from 'react';
import MyForm from '../../MyForm/MyForm';
import { fields } from '../FieldsData';
import PageHeader from '../../PageHeader/PageHeader';
import { apis } from '../../../../API/apis';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import { INTERNS } from '../../../../Constants/const';
import { useTranslation } from 'react-i18next';
import { SERVER_ERROR } from '../../../../Constants/const'

const Create = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const onSubmit = (values) => {
        values.start_date = moment.utc(values.date_range[0]).format('YYYY-MM-DD')
        values.end_date = moment.utc(values.date_range[1]).format('YYYY-MM-DD')
        console.log("values", values)
        apis.createIntern(values)
            .then(() => {
                swal({
                    title: t('SUCCESS'),
                    text: t('CREATE_INTERN_SUCCESS'),
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
                    console.log("Create failed")
                }
                else {
                    navigate(`/${SERVER_ERROR}`)
                }
            })
    }
    return (
        <div>
            <PageHeader link={`/${INTERNS}`} title={t('PAGE_HEADER_CREATE_TITLE')} subtitle={t('PAGE_HEADER_CREATE_SUBTITLE')} />
            <MyForm fields={fields} onSubmit={onSubmit}></MyForm>
        </div>
    );
}

export default Create;
