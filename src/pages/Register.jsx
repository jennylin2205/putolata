import React from 'react';
import logo from '../assets/img/logo.png';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import TextField from '@material-ui/core/TextField';
import '../assets/css/register.css';

function Register() {
    return (
        <div className="register">
            <p className="register__title">THAM GIA VỚI CHÚNG TỚ NÀO!</p>
            <div className="register__container">
                <div className="register__topper">
                    <img src={logo} alt="" className="register__logo"/>
                </div>
                <p className="register__name">ĐĂNG KÝ</p>
                <Container ml-7 mr-7>
                    <Row>
                        <Col md>
                            <TextField 
                                fullWidth
                                required
                                style={{ margin: 8 }} 
                                label="Username"
                                color="secondary"
                            />
                        </Col>

                        <Col md>
                            <TextField 
                                required
                                fullWidth
                                style={{ margin: 8 }}
                                label="Tên người nhận"
                                color="secondary"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md>
                            <TextField 
                                style
                                fullWidth
                                required
                                style={{ margin: 8 }}
                                label="Mật khẩu"
                                type="password"
                                color="secondary"
                            />
                        </Col>

                        <Col md>
                            <TextField 
                                fullWidth
                                required
                                style={{ margin: 8 }}
                                label="Nhập lại mật khẩu"
                                type="password"
                                color="secondary"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md>
                            <TextField 
                                style
                                fullWidth
                                required
                                style={{ margin: 8 }}
                                label="Email"
                                type="email"
                                color="secondary"
                            />
                        </Col>

                        <Col md>
                            <TextField 
                                fullWidth
                                required
                                style={{ margin: 8 }}
                                label="Số điện thoại"
                                type="tel"
                                color="secondary"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md>
                            <TextField 
                                fullWidth
                                required
                                style={{ margin: 10 }}
                                label="Địa chỉ"
                                color="secondary"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md>
                            <TextField 
                                style
                                fullWidth
                                required
                                style={{ margin: 8 }}
                                label="Phường"
                                color="secondary"
                            />
                        </Col>

                        <Col md>
                            <TextField 
                                fullWidth
                                required
                                style={{ margin: 8 }}
                                label="Quận/Huyện"
                                color="secondary"
                            />
                        </Col>

                        <Col md>
                            <TextField 
                                fullWidth
                                required
                                style={{ margin: 8 }}
                                label="Thành phố"
                                color="secondary"
                            />
                        </Col>
                    </Row>
                    <div className="register__buttoncontain">
                        <button className="register__button color-10">HOÀN THÀNH ĐĂNG KÝ</button>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Register;