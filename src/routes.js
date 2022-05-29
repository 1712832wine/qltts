import HomeComponent from "./views/components/HomeComponent/HomeComponent";
import Create from "./views/components/InternComponent/Create/Create";
import Edit from "./views/components/InternComponent/Edit/Edit";
import InternComponent from "./views/components/InternComponent/InternComponent";
import ViewDetail from "./views/components/InternComponent/ViewDetail/ViewDetail";
import DefaultLayout from "./views/layouts/DefaultLayout"
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export const routes = [
    {
        key: 1,
        path: '/',
        element:
            <DefaultLayout>
                <HomeComponent />
            </DefaultLayout>

    },
    {
        key: 2,
        path: '/interns',
        element:
            <DefaultLayout>
                <InternComponent />
            </DefaultLayout>
    },
    {
        key: 3,
        path: '/interns/:id',
        element:
            <DefaultLayout>
                <ViewDetail />
            </DefaultLayout>
    },
    {
        key: 4,
        path: '/interns/create',
        element:
            <DefaultLayout>
                <Create />
            </DefaultLayout>
    },
    {
        key: 5,
        path: '/interns/edit/:id',
        element:
            <DefaultLayout>
                <Edit />
            </DefaultLayout>
    },
    {
        key: 6,
        path: '/500',
        element: <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={
                <Link to='/'>
                    <Button type="primary">Back Home</Button>
                </Link>
            }
        />
    },
    {
        key: 7,
        path: '*',
        element: <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Link to='/'>
                    <Button type="primary">Back Home</Button>
                </Link>
            }
        />
    }

]