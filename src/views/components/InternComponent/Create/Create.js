import React from 'react';
import MyForm from '../../MyForm/MyForm';
import { fields } from '../FieldsData';
import PageHeader from '../../PageHeader/PageHeader';
import { apis } from '../../../../API/apis';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import moment from 'moment';

const Create = () => {
    const navigate = useNavigate();
    const onSubmit = (values) => {
        values.start_date = moment.utc(values.date_range[0]).format('YYYY-MM-DD')
        values.end_date = moment.utc(values.date_range[1]).format('YYYY-MM-DD')
        apis.createIntern(values)
            .then(() => {
                swal({
                    title: "Success!",
                    text: "You created an new intern successfully!",
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
                    console.log("Create failed")
                }
                else {
                    navigate('/500')
                }
            })
    }
    return (
        <div>
            <PageHeader link='/interns' title='Create Intern Page' subtitle='This page use to create new intern' />
            <MyForm fields={fields} onSubmit={onSubmit}></MyForm>
        </div>
    );
}

export default Create;
