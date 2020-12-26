import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bestsellerbanner from '../assets/img/bestsellerbanner.png';

import newbanner from '../assets/img/newbanner.png';
import gif2 from '../assets/img/gif2.gif';
import gif3 from '../assets/img/gif3.gif';

import Product from '../components/Product.jsx';
import "../assets/css/sales.css"
function ProductAll() {
    return(
        <div className="salescontainer">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={gif3} alt="" className="sales__bannergroup"/>
                    </Col>
                    <Col md={6}>
                        <img src={gif2} alt="" className="sales__bannergroup"/>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <img src={newbanner} alt="" className="sales__banner"/>
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

                    <Row className="justify-content-md-center">
                    <img src={bestsellerbanner} alt="" className="sales__banner"/>
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
        </div>
    )
}

export default ProductAll