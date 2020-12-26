import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/productdetail.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MultiItems from '../components/MultiItems.jsx'
import comtava from '../assets/img/Image 40.png'
import smallicon from '../assets/img/Image 39.png'
import commenticon from '../assets/img/Image 38.png'
function ProductDetails() {
    // Handle slide
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
    });

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav",
    };

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: "10px",
    };

    //Slide data
    const slidesData = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
    ];

    //Handle quantity 
    const [qty, setQty] = React.useState('');
    const handleChange = (event) => {
        setQty(event.target.value);
    };

    return (
        <div className="productdetails">
        <Container>
            <Row>
                <Col md={6}>
                    <div className="slider-wrapper">
                        <Slider
                            {...settingsMain}
                            asNavFor={nav2}
                            ref={(slider) => setSlider1(slider)}
                        >
                            {slidesData.map((slide) => (
                            <div className="slick-slide" key={slide.id}>
                                <img
                                className="slick-slide-image"
                                src={`https://picsum.photos/800/400?img=${slide.id}`}
                                />
                            </div>
                            ))}
                        </Slider>
                        <div className="thumbnail-slider-wrap">
                            <Slider
                            {...settingsThumbs}
                            asNavFor={nav1}
                            ref={(slider) => setSlider2(slider)}
                            >
                            {slidesData.map((slide) => (
                                <div className="slick-slide" key={slide.id}>
                                <img
                                    className="slick-slide-image"
                                    src={`https://picsum.photos/800/400?img=${slide.id}`}
                                />
                                </div>
                            ))}
                            </Slider>
                        </div>
                    </div>
                </Col>
                
                <Col md={6}>
                    <div className="productdetails__details">
                        <p className="productdetails__title">Vỏ Chanh Dây Sấy Dẻo 145G - MS1999</p>
                        <p className="productdetails__srtdes">Vỏ chanh dây được gọt rửa cẩn thận, ngâm vào dịch trái trước khi sấy.</p>
                        <div className="productdetails__rating">
                            <div className="productdetails__starrate">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>

                            <p className="productdetails__rate">75 đánh giá</p>
                            <p className="productdetails__rate">25 bình luận</p>
                        </div>

                        <div className="productdetails__price">
                            <p className="productdetails__actprice">100.000 VNĐ</p>
                            <strike><p className="productdetails__fakeprice">500.000 VNĐ</p></strike>
                        </div>
                        
                        
                        <div className="productdetails__status">
                            <p className="productdetails__sttitle">TÌNH TRẠNG: </p>
                            <p className="productdetails__sta">CÒN HÀNG</p>
                        </div>
                        <div className="productdetails__qty">
                            <p className="productdetails__sttitle">SỐ LƯỢNG: </p>
                            <FormControl>
                                <Select
                                value={qty}
                                onChange={handleChange}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="productdetails__button">
                            <button className="productdetails__addbutton">THÊM VÀO GIỎ</button>
                            <button className="productdetails__buynow">MUA NGAY</button>
                        </div>
                        <ul>
                            <li className="productdetails__srtdes">* Bảo bảo vệ sinh an toàn thực phẩm.</li>
                            <li className="productdetails__srtdes">* Bảo đảm nguồn hàng chính hãng.</li>
                            <li className="productdetails__srtdes">* Tư vấn, chăm sóc khách hàng 24/24.</li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <div>
                <p className="productdetails__titlecate"><span><img className="productdetails__catetitle" src={smallicon} alt=""/></span>SẢN PHẨM CÙNG DANH MỤC</p>
            </div>
            <MultiItems/>
            <div className="productdetails__seemore">
                <button className="seemorebutton">XEM THÊM</button>
            </div>

            <div>
                <p className="productdetails__titlecate"><span><img src={smallicon} className="productdetails__catetitle" alt=""/></span>MIÊU TẢ SẢN PHẨM</p>
                <p>Miêu tả sản phẩm ở đây.</p>
            </div>
            
            <p className="productdetails__titlecate"><span><img className="productdetails__catetitle" src={smallicon} alt=""/></span>SẢN PHẨM BÁN CHẠY</p>
            
            <MultiItems/>
            <div className="productdetails__seemore">
                <button className="seemorebutton">XEM THÊM</button>
            </div>

            <p className="productdetails__titlecate"><span>
                <img className="productdetails__catetitle" src={smallicon} alt=""/></span>ĐÁNH GIÁ VÀ BÌNH LUẬN SẢN PHẨM</p>
                <Row>
                    <Col sm="auto">
                        <img src={commenticon} alt="" className="productdetails__commentimg"/>
                        <div className="productdetails__cmtrate">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </Col>
                    <Col sm>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <div className="productdetails__seemore">
                            <button className="productdetails__commentbutton">BÌNH LUẬN</button>
                        </div>
                    </Col>
                </Row>
            <p className="productdetails__titlecate"><span>
                <img className="productdetails__catetitle" src={smallicon} alt=""/></span>NHẬN XÉT CỦA KHÁCH HÀNG</p>
                <Row>
                    <Col sm="auto">
                        <img src={comtava} alt="" className="productdetails__comtimg"/>
                    </Col>

                    <Col sm>
                        <div className="productdetails__name">
                            <p className="productdetails__comtname">JennyLin</p>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p className="productdetails__actcomt">Bình luận người dung ở đây!<span> - 20/10/2020 0h30p - Đã mua hàng</span></p>
                    </Col>
                </Row>
        </Container>
        </div>
    );
}

export default ProductDetails;
