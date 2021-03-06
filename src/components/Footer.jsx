import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slogan from '../assets/img/slogan.png';
import logo from '../assets/img/logo.png';
import '../assets/css/footer.css'

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="footer__slogan">
                                <img src={logo} className='logopic' alt=""/>
                                <img src={slogan} className='sloganpic' alt=""/>
                            </div>
                            <div className="footer__info">
                                <p className="footer__infobasic">Phone: 0934567899</p>
                                <p className="footer__infobasic">Email : nhom19@gm.uit.edu.vn</p>
                                <p className="footer__infobasic">Địa chỉ : Số 1 Hàn Thuyên, KP6, Phường Linh Trung, Quận Thủ Đức, TPHCM</p>
                            </div>
                        </Col>

                        {/* <Col md={2}>
                        
                        </Col> */}

                        <Col md={2}>
                            <div className="footer__adveninfo">
                                <p className="footer__title">Hỗ trợ</p>
                                <a href="https://www.facebook.com/Putolata-103170758381803" className="footer__infoadven">Liên hệ</a>
                            </div>
                        </Col>

                        <Col md={2}>
                            <div className="footer__adveninfo">
                                <p className="footer__title">Mạng xã hội</p>
                                <a href="https://twitter.com/" className="footer__infoadven">Twitter</a>
                                <a href="https://www.facebook.com/Putolata-103170758381803" className="footer__infoadven">Facebook</a>
                            </div>
                        </Col>

                        <Col md={2}>
                            <div className="footer__adveninfo">
                                <p className="footer__title">Kết nối</p>
                                <a href="" className="footer__infoadven">Đăng ký</a>
                                <a href="" className="footer__infoadven">Đăng nhập</a>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer__copyright">
                <p className="footer__copyinfo">© Copyright Nhóm 19 - Đây là website được xây dung cho mục đích giáo dục, không có thông tin nào ở đây là thật.</p>
            </div>
        </div>
    );
}

export default Footer;