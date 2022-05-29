import React, { useEffect, useState } from 'react'
import MyForm from '../../MyForm/MyForm';
import { fields } from '../FieldsData';
import PageHeader from '../../PageHeader/PageHeader';
import { apis } from '../../../../API/apis';
import swal from 'sweetalert';
import { useNavigate, useParams } from "react-router-dom";
import moment from 'moment';

export default function Edit() {
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
                    title: "Success!",
                    text: "You edited successfully!",
                    icon: "success",
                }).then(() => {
                    navigate('/interns')
                })
            })
            .catch(({ response }) => {
                if (response.data) {
                    swal({
                        title: "Error!",
                        text: response.data.message,
                        icon: "error",
                    }).then(() => { })
                } else {
                    if (!response.data) {
                        navigate('/500')
                    }
                    if (response.status === 404) {
                        navigate('/404')
                    }
                }
            })
    }
    return (
        <div>
            <PageHeader link='/interns' title='Edit Intern Page' subtitle='This page use to edit existing intern' />
            <MyForm fields={fields} onSubmit={onSubmit} value_before_edit={value_before_edit}></MyForm>
        </div>
    )
}
