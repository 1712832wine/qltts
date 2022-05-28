import HomeComponent from "./views/components/HomeComponent/HomeComponent";
import Create from "./views/components/InternComponent/Create/Create";
import Edit from "./views/components/InternComponent/Edit/Edit";
import InternComponent from "./views/components/InternComponent/InternComponent";
import ViewDetail from "./views/components/InternComponent/ViewDetail/ViewDetail";

export const routes = [
    {
        key: 1,
        path: '/',
        element: <HomeComponent />
    },
    {
        key: 2,
        path: '/interns',
        element: <InternComponent />
    },
    {
        key: 3,
        path: '/interns/:id',
        element: <ViewDetail />
    },
    {
        key: 4,
        path: '/interns/create',
        element: <Create />
    },
    {
        key: 4,
        path: '/interns/edit/:id',
        element: <Edit />
    }
]