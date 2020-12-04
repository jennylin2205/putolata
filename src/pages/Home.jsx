import React from 'react';
import slogan from '../assets/img/slogan.png';
import welcome from '../assets/img/welcome.png'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import banner from '../assets/img/home-img.png'
import '../assets/css/home.css';

import topper from '../assets/img/topper.png';
import cake from '../assets/img/Image 33.png';
import heart from '../assets/img/Image 30.png';
import metal from '../assets/img/Image 32.png';
import news from '../assets/img/new.png';
import bling from '../assets/img/Image -1.png';
import bling2 from '../assets/img/Image 17.png';

import Product from '../components/Product.jsx';
import superstar from '../assets/img/superstar.png';
import Carousel from 'react-bootstrap/Carousel';
function Home() {
    return(
        <div className="content">
            <Container>
                <Row className="home__banner">
                    <Col md>
                        <img src={slogan} className='home__slogan' alt=""/>
                        <div className="home__button">
                            <button className="home__type1">TÌM HIỂU</button>
                            <button className="home__type2">SẢN PHẨM</button>
                        </div>
                    </Col>

                    <Col md>
                        <div className="home__sidebanner">
                            <img src={banner} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="home__intent">
                <img src={welcome} className='intent' alt=""/>
                <p className="home__descript">Để chúng mình tự giới thiệu sơ nhé!</p>
                <Container>
                    <Row>
                        <Col className='h-100'>
                            <div className="home__intentcontain">
                                <img src={topper} className='home__topperImg' alt=""/>
                                <div className="home__intentcontent">
                                    <img src={cake} alt="" className="home__topperIcon"/>
                                    <p className="home__topperDes">Chuyên về tất cả các mặt hàng ăn vặt.</p>
                                </div>
                            </div>
                        </Col>

                        <Col className='h-100'>
                            <div className="home__intentcontain">
                                <img src={topper} className='home__topperImg' alt=""/>
                                <div className="home__intentcontent">
                                    <img src={heart} alt="" className="home__topperIcon"/>
                                    <p className="home__topperDes">Phù hợp với tất cả mọi lứa tuổi.</p>
                                </div>
                            </div>
                        </Col>

                        <Col className='h-100'>
                            <div className="home__intentcontain">
                                <img src={topper} className='home__topperImg' alt=""/> 
                                <div className="home__intentcontent">
                                    <img src={metal} alt="" className="home__topperIcon"/>
                                    <p className="home__topperDes">Bảo đảm nguồn hàng chất lượng.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="home__newcontain">
                <img src={bling2} alt="" className='sparkle'/>
                <img src={news} alt="" className="home__title"/>
                <img src={bling} alt="" className='sparkle'/>
                <p className="home__descript">Hương vị mới, bắt mắt hơn, thơm ngon hơn? Ngại gì mà không thử!</p>
                <Container>
                    <Row>
                        <Col lg={3} md={6}>
                            <Product
                                title="Misha Collins Famous Coloring" 
                                price={999.99} 
                                image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                rating={5}
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Product
                                title="Misha Collins Famous Coloring" 
                                price={999.99} 
                                image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                rating={5}
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Product
                                title="Misha Collins Famous Coloring" 
                                price={999.99} 
                                image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                rating={5}
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Product
                                title="Misha Collins Famous Coloring" 
                                price={999.99} 
                                image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                rating={5}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={3} md={6}>
                            <Product
                                title="Misha Collins Famous Coloring" 
                                price={999.99} 
                                image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                rating={5}
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Product
                                title="Misha Collins Famous Coloring" 
                                price={999.99} 
                                image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                rating={5}
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Product
                                title="Misha Collins Famous Coloring" 
                                price={999.99} 
                                image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                rating={5}
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <Product
                                title="Misha Collins Famous Coloring" 
                                price={999.99} 
                                image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                rating={5}
                            />
                        </Col>
                    </Row>
                </Container>
                <button className="home__type1">XEM THÊM</button>
            </div>

            <div className="home__star">
                <img src={superstar} alt="" className="home__title"/>
                <p className="home__descript">Món gì ngon là chúng mình có hết!</p>
                <div className="home__starcontent">
                    <Container>
                        <Row>
                        <Col lg={3} md={4}>
                                <Product
                                    title="Misha Collins Famous Coloring" 
                                    price={999.99} 
                                    image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                    rating={5}
                                />
                            </Col>
                            <Col lg={6} md={4}>
                                <Product
                                    title="Misha Collins Famous Coloring" 
                                    price={999.99} 
                                    image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                    rating={5}
                                />
                            </Col>
                            <Col lg={3} md={4}>
                                <Product
                                    title="Misha Collins Famous Coloring" 
                                    price={999.99} 
                                    image={'https://cdn.concung.com/2019/06/39316-50253/thach-orihiro-vi-nho-120g.jpg'}
                                    rating={5}
                                />
                            </Col>
                        </Row>
                    </Container>
                    <button className="home__type2">XEM THÊM</button>
                </div>
            </div>
        </div>
    );
}

export default Home;