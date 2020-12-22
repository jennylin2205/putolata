import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import edit from '../assets/img/Image 48.png'
import avatar from '../assets/img/NoPath - Copy (5).png';
import starbling from '../assets/img/Image 45.png';
import billred from '../assets/img/Image 47.png';
import billgreen from '../assets/img/Image 46.png';

import {Link} from 'react-router-dom';
import '../assets/css/account.css';
function Account() {
    return (
        <div className="account">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <div className="account__container">
                            <div className="account__content">
                                <div className="account__topper">
                                    <p className="account__title">Hồ sơ cá nhân</p>
                                </div>
                                <div className="account__button">
                                    <Link to='/editaccountinfo'><img src={edit }className="account__editbutton" alt=""/></Link>
                                </div>
                            
                                <div className="account__contentcontain">
                                    <Row>
                                        <Col>
                                            <div className="account__ava">
                                                <img src={avatar} alt="" className="account__avatar"/>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="account__titleinfo">
                                                <img src={starbling} className="dotstart" alt=""/>
                                                <p className="account__infotitle">Thông tin tài khoản</p>
                                            </div>
                                            <p className="account__info">USERNAME:</p>
                                            <p className="account__details">jennylin</p>
                                            <p className="account__info">PASSWORD:</p>
                                            <p className="account__details">*********</p>
                                            <p className="account__info">EMAIL:</p>
                                            <p className="account__details">ngaynangmoi2205@gmail.com</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="account__contentcontain">
                                    <Row>
                                        <Col>
                                            <div className="account__titleinfo">
                                                <img src={starbling} className="dotstart" alt=""/>
                                                <p className="account__infotitle">Thông tin tài khoản</p>
                                            </div>
                                            <div className="account__address">
                                                <div className="account__addrinfo">
                                                    <p className="account__info">TÊN:</p>
                                                    <p className="account__details">Jenny Lin</p>
                                                </div>

                                                <div className="account__addrinfo">
                                                    <p className="account__info">SĐT:</p>
                                                    <p className="account__details">0909090909</p>
                                                </div>

                                                <p className="account__info">ĐỊA CHỈ:</p>
                                                <p className="account__details">12345, Đường Gì Đó, Phường Gì Đó, TPHCM.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <div className="account__container">
                            <div className="account__content">
                                <div className="account__topper">
                                    <p className="account__title">Quản lý đơn hàng</p>
                                </div>
                                <ul className="account__listbill">
                                    <li><span><img src={billgreen} alt="" className="account__billstatus"/></span>ĐƠN HÀNG MÃ WE001</li>
                                    <li><span><img src={billred} alt="" className="account__billstatus"/></span>ĐƠN HÀNG MÃ WE002</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Account