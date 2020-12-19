import { Component } from 'react';
import { Layout, Row, Col, Image, Space } from 'antd';
import react_logo from '../logo192.png';
import redux_logo from '../redux.png';
import node_logo from '../node.png';
import express_logo from '../Expressjs.png'
import mongo_logo from '../mongo.png';

const { Content } = Layout;

class Home extends Component {
    render(){
        return(
            <Content>
                <Row justify='center'>
                    <Col >
                        <div style={{justifyContent:'center'}}>
                        <div style ={{justifyContent: 'center', display: 'flex'}}>
                        <p style={{fontSize: '4vw', fontFamily: 'Dancing Script'}}>My Bookings</p>
                        </div>
                        <div style ={{justifyContent: 'center', display: 'flex'}}>
                        <p className='customP' style={{fontSize: '1vw'}}>Computer Networks Project - La Sapienza </p>
                        </div>
                        <div style={{justifyContent: 'center', display:'flex'}}>
                        <h5 style={{fontSize:'0.6vw', alignItems: 'center'}} className='customP'>Made with</h5>
                        <br/>
                        <br />
                        </div>
                        <div style={{justifyContent: 'center', display:'flex'}}>
                        <Space size={50}>
                                <Image
                                    width={120}
                                    src={react_logo}
                                />
                                <Image
                                    width={120}
                                    src={redux_logo}
                                />
                                <Image
                                    width={220}
                                    src={node_logo}
                                />
                                 <Image
                                    width={220}
                                    src={express_logo}
                                />
                                <Image
                                    width={220}
                                    src={mongo_logo}
                                />
                            </Space>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default Home;