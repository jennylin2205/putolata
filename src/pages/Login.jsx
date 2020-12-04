import React from 'react';
import logo from '../assets/img/logo.png';
import welcome from '../assets/img/welcome.png'
import banner1 from '../assets/img/banner2.png';
import '../assets/css/login.css';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import TextField from '@material-ui/core/TextField';

function Login() {
    return(
        <div className="login">
            <div className="login__banner">
                <img src={banner1} alt=""/>
            </div>
            <div className="login__container">
                <Container>
                    <Row className='login__content'>
                        <Col md={6}>
                            <div className="login__leftcontent">
                                <img src={welcome} alt="" className="login__welcome"/>
                                <img src={logo} alt="" className="login__logo"/>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="login__info">
                                <p className="login__title">ĐĂNG NHẬP</p>
                                <TextField
                                    id="login_email"
                                    required
                                    label="Email"
                                    type="email"
                                    color="secondary"
                                    helperText="Nhập email đã đăng ký vào đây."
                                />

                                <TextField
                                    id="login_password"
                                    required
                                    label="Password"
                                    type="password"
                                    color="secondary"
                                    helperText="Nhập password đã đăng ký vào đây."
                                />
                                <div className="login__textcontent">
                                    <a href='/forgetpassword' className="login__text">Quên mật khẩu?</a>
                                </div>
                                <button className="login__button color-5">ĐĂNG NHẬP</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Login