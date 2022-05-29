
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './defaultlayout.scss'
import { useState } from 'react';

const { Header, Content, Footer } = Layout;

export default function DefaultLayout({ children }) {
    const [location,] = useState(window.location.pathname);
    const routers = [
        {
            key: '/',
            label: 'Home',
            path: '/'
        },
        {
            key: '/interns',
            label: 'Intern',
            path: '/interns'
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
                    defaultSelectedKeys={[location]}
                // items={routers}
                >
                    {routers.map((router) => {
                        return (
                            <Menu.Item key={router.key}>
                                <Link to={router.path} className="bold">{router.label}</Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Header>
            <Content className="site-layout content-wrapper">

                <div className="site-layout-background content">
                    {children}
                </div>
            </Content>
            <Footer className="text-center">
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout >
    )
}
