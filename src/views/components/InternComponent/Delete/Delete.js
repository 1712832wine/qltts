import React from 'react'
import swal from 'sweetalert'
import { Button } from 'antd'
import { apis } from '../../../../API/apis'
import { DeleteOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next';

export default function Delete({ item, refresh, setRefresh }) {
    const { t } = useTranslation();

    const deleteItem = (item) => {
        swal({
            title: t('ARE_YOU_SURE'),
            text: t('SURE_WANT_TO_DELETE'),
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    apis.deleteIntern(item.id)
                        .then(res => {
                            swal(t('GOOD_JOB'), t('DELETE_INTERN_SUCCESS'), "success");
                            setRefresh(!refresh);
                        })
                        .catch(err => { console.log(err) })
                } else {
                }
            });

    }

    return (
        <Button type="danger" onClick={() => deleteItem(item)} icon={<DeleteOutlined />}></Button>
    )
}
