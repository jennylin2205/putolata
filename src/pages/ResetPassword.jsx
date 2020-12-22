import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@material-ui/core/TextField';
import '../assets/css/resetpassword.css';
import {Link} from 'react-router-dom';

import icon from '../assets/img/Image 50.png'
function ResetPassword() {
    return(
        <div className="forgetpassword">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <div className="forgetpassword__container">
                            <div className="forgetpassword__top">
                                <img src={icon} alt="" className="password__logo"/>
                                <p className="forgetpassword__title">Đặt lại mật khẩu</p>
                            </div>
                            <div className="forgetpassword__content">
                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    type="password"
                                    id="standard-helperText"
                                    label="Mật khẩu mới"
                                />

                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    type="password"
                                    id="standard-helperText"
                                    label="Nhập lại mật khẩu"
                                    helperText="Phải trùng khớp với mật khẩu vừa nhập."
                                />

                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="standard-helperText"
                                    label="Mã xác nhận"
                                    helperText="Mã xác nhận gửi qua email đã đăng ký."
                                />

                                <div className="forgetpassword__submit">
                                    <Link to="/resetpassword" className="forgetpassword__button">
                                        <button className="forgetpassword__button color-1">GỬI MÃ XÁC NHẬN</button>
                                    </Link>

                                    <Link to="/register" className='normallink'>Chưa có tài khoản? Đăng ký ngay!</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResetPassword
