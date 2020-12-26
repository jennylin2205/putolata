import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import banner from '../assets/img/salesbanner.png';
function Sales() {
    return(
        <div className="salescontainer">
            <Container>
                <Row>
                    <img src="" alt="" className="sales__bannergroup"/>
                </Row>
            </Container>
            <img src={banner} alt="" className="sales__banner"/>
        </div>
    )
}

export default Sales