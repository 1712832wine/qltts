
import { Layout, Menu } from 'antd';
import HomeComponent from '../components/HomeComponent/HomeComponent';
import InternComponent from '../components/InternComponent/InternComponent';
import ViewDetail from '../components/InternComponent/ViewDetail/ViewDetail';
import { Route, Routes, Link } from 'react-router-dom';
import './defaultlayout.scss'

const { Header, Content, Footer } = Layout;

export default function DefaultLayout() {
    const routers = [
        {
            key: 1,
            label: 'Home',
            route: '/'
        },
        {
            key: 2,
            label: 'Intern',
            route: '/interns'
        }
    ]
    return (
        <Layout className="vh-100" >
            <Header
                className="header"
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                // items={routers}
                >
                    {routers.map((router) => {
                        return (
                            <Menu.Item key={router.key}>
                                <Link to={router.route} className="bold">{router.label}</Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Header>
            <Content className="site-layout content-wrapper">

                <div className="site-layout-background content">
                    <Routes>
                        <Route exact path='/' element={< HomeComponent />} />
                        <Route path='/interns' element={<InternComponent />} />
                        <Route path="/interns/:id" element={<ViewDetail />} />
                    </Routes>
                </div>
            </Content>
            <Footer className="text-center">
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout >
    )
}
