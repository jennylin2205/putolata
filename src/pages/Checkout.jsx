import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import checkoutlogo from '../assets/img/Image 42.png';
import {Link} from 'react-router-dom';
import "../assets/css/checkout.css";
function Checkout() {
    return (
        <Container>
           <Row>
               <Col>
                <div className="checkout__container">
                    <p className="checkout__title">Hóa đơn thanh toán</p>
                    <p className="checkout__billcode">MÃ SỐ ĐƠN HÀNG WE002</p>
                    <div className="checkout__contentcontain">
                        <p className="checkout__subtitle">CHI TIẾT ĐƠN HÀNG :</p>
                        <div className="checkout__items">
                            <Container>
                                <div className="checkout__detailitem">
                                    <Row >
                                        <Col className="chechout__addinfo" sm={8}>Vỏ Chanh Dây Sấy Dẻo 145G - MS1999</Col>
                                        <Col className="chechout__addinfo" sm={2}>Số lượng : 1</Col>
                                        <Col className="chechout__addinfo" sm={2}>100000 VNĐ</Col>
                                    </Row>
                                </div>
                                <div className="checkout__detailitem">
                                    <Row className="chechout__addinfo">
                                        <Col className="chechout__addinfo" sm={8}>Vỏ Chanh Dây Sấy Dẻo 145G - MS1999</Col>
                                        <Col className="chechout__addinfo" sm={2}>Số lượng : 1</Col>
                                        <Col className="chechout__addinfo" sm={2}>100000 VNĐ</Col>
                                    </Row>
                                </div>
                            </Container>
                        </div>

                        <p className="checkout__subtitle">PHƯƠNG THỨC THANH TOÁN :</p>
                        <div className="checkout__items">
                            <Container>
                                <p className="checkout__details">Thanh toán khi nhận hàng.</p>
                            </Container>
                        </div>

                        <p className="checkout__subtitle">THÔNG TIN GIAO HÀNG :</p>
                        <div className="checkout__items">
                            <div className="checkout__detailitem">
                                <Container>
                                    <Row>
                                        <Col className="checkout__add" sm={2}>Tên người nhận : </Col>
                                        <Col className="chechout__addinfo">JENNY LIN</Col>
                                    </Row>

                                    <Row>
                                        <Col className="checkout__add" sm={2}>Địa chỉ : </Col>
                                        <Col className="chechout__addinfo">12345, Đường Gì Đó, Phường Gì Đó, TPHCM.</Col>
                                    </Row>

                                    <Row>
                                        <Col className="checkout__add" sm={2}>SĐT : </Col>
                                        <Col className="chechout__addinfo">0909090909</Col>
                                    </Row>

                                    <Row>
                                        <Col  className="checkout__add" sm={2}>Email : </Col>
                                        <Col className="chechout__addinfo">17520811@gm.uit.edu.vn</Col>
                                    </Row>

                                    <Row>
                                        <Col className="editinfobutton"><Link className="editinfo" to="/editaccountinfo"><buton >Chỉnh sửa thông tin</buton></Link></Col>
                                    </Row>

                                    <p className="checkout__shippingfee">Phí giao hàng: 15.000 VNĐ</p>
                                    <p className="checkout__totalbill">Tổng cộng: 215.000 VNĐ</p>
                                </Container>
                            </div>
                        </div>

                        <p className="checkout__subtitle">THỜI GIAN GIAO HÀNG DỰ KIẾN :</p>
                        <div className="checkout__items">
                            <Container>
                                <p className="checkout__details">Từ ngày 30/10/2020 - 04/11/2020</p>
                            </Container>
                        </div>
                    </div>
                </div>
                <div className="checkout__logocontainer">
                    <p className="checkout__logoscript">Nhớ kiểm tra thông tin thật kỹ bạn nhé!</p>
                    <img src={checkoutlogo} alt="" className="checkout__img"/>
                    <div className="checkout__buttoncheck">
                        <Link className="checkout__check" to="/thankyou"><buton >Xác nhận đơn hàng</buton></Link>
                    </div>
                </div>
               </Col>
           </Row>
        </Container>
    )
}

export default Checkout