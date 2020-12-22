import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@material-ui/core/TextField';

import starbling from '../assets/img/Image 45.png';

import {Link} from 'react-router-dom';
import '../assets/css/editaccount.css'
function EditAccount() {
    return (
        <div className="editaccount">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <p className="editaccount__maintitle">Chỉnh sửa thông tin</p>
                        <div className="editaccount__container">
                            <div className="editaccount__topper">
                                <p className="editaccount__title">Hồ sơ cá nhân</p>
                            </div>
                            <div className="editaccount__maincontent">
                                <div className="editaccount__titleinfo">
                                    <img src={starbling} className="editdotstart" alt=""/>
                                    <p className="editaccount__infotitle">Thông tin tài khoản</p>
                                </div>
                                <div className="editaccount__textfield">
                                    <TextField
                                        margin="normal"
                                        color="secondary"
                                        required
                                        fullWidth
                                        id="standard-helperText"
                                        label="USERNAME"
                                        defaultValue="JennyLin"
                                    />

                                    <TextField
                                        color="secondary"
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="password"
                                        id="standard-helperText"
                                        label="PASSWORD"
                                        defaultValue="********"
                                    />

                                    <TextField
                                        margin="normal"
                                        color="secondary"
                                        required
                                        fullWidth
                                        type="email"
                                        id="standard-helperText"
                                        label="EMAIL"
                                        defaultValue="ngaynangmoi2205@gmail.com"
                                    /> 
                                </div>

                                <div className="editaccount__titleinfo">
                                    <img src={starbling} className="editdotstart" alt=""/>
                                    <p className="editaccount__infotitle">Thông tin giao hàng</p>
                                </div>
                                <div className="editaccount__textfield">
                                    <TextField
                                        margin="normal"
                                        color="secondary"
                                        required
                                        fullWidth
                                        id="standard-helperText"
                                        label="TÊN"
                                        defaultValue="Jenny Lin"
                                    />

                                    <TextField
                                        color="secondary"
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="phone"
                                        id="standard-helperText"
                                        label="SỐ ĐIỆN THOẠI"
                                        defaultValue="0909090909"
                                    />

                                    <TextField
                                        margin="normal"
                                        color="secondary"
                                        required
                                        fullWidth
                                        id="standard-helperText"
                                        label="ĐỊA CHỈ"
                                        defaultValue="12345, Đường Gì Đó, Phường Gì Đó, TPHCM."
                                    /> 
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <button className="editaccount__type1">XÁC NHẬN</button>
                </Row>
            </Container>
        </div>
    )
}

export default EditAccount