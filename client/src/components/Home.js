import { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

class Home extends Component {
    render(){
        return(
            <Content style={{ height: 'height: 100vh' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content</div>
            </Content>
        );
    }
}

export default Home;