import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import carticon from '../assets/img/Image 41.png';
import '../assets/css/cartitem.css';

function Cart() {
    const basket = [
        {
            id: 1,
            img: "https://image.freepik.com/free-photo/beautiful-model-with-long-smooth-flying-blonde-hair-isolated-white-studio-background-young-caucasian-model-with-well-kept-skin-hair-blowing-air_155003-21881.jpg",
            name: "Vỏ Chanh Dây Sấy Dẻo 145G - MS1999",
            qty: 1,
            price: 100000
        },
        {
            id: 2,
            img: "https://image.freepik.com/free-photo/beautiful-model-with-long-smooth-flying-blonde-hair-isolated-white-studio-background-young-caucasian-model-with-well-kept-skin-hair-blowing-air_155003-21881.jpg",
            name: "Vỏ Chanh Dây Sấy Dẻo 145G - MS1999",
            qty: 2,
            price: 10000
        }
    ];

    // decrease = () => {
    //     this.setState({ value: this.state.value - 1 });
    // }
    
    // increase = () => {
    //     this.setState({ value: this.state.value + 1 });
    // }

    return(
        <div className="cartitem">
            {/* {basket.map((item)=> (
                <tr>
                <td>
                  <img src={item.img} alt='Product' width='64' />
                </td>
                <td>{item.name}</td>
                <td>{item.price} VNĐ</td>
              </tr>
            ))} */}
            <div className="cartitem__container">
                <Container>
                    <div className="cartitem__topper">
                        <img src={carticon} className="cart__icon" alt=""/>
                        <p className="cartitem__title">Giỏ hàng của bạn</p>
                    </div>
                    <div className="itemscontainer">
                        <Table responsive hover align="center">
                            <thead className="cartitem__thread">
                                <tr>
                                <th>STT</th>
                                <th>Minh họa</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Tổng tiền</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {basket.map((item)=> (
                                    <tr>
                                    <td>{item.id}</td>
                                    <td>
                                        <img src={item.img} alt='Product' className="cartitem__img"/>
                                    </td>
                                    <td>{item.name}</td>
                                    <td><button className="minus">-</button>{item.qty}<button className="plus">+</button></td>
                                    <td>{item.price} VNĐ</td>
                                    <td><button className="removebutton">x</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className="cartitem__total">
                        <p className="cartitem__totalprice"> TỔNG TIỀN: 200.000 VNĐ</p>
                        <div className="cartitem__buttons">
                            <Link to="/checkout"><button className="pay">Thanh toán</button></Link>
                            <button className="continue">Tiếp tục mua sắm</button>
                            <button className="delete">Xóa giỏ hàng</button>
                        </div>
                    </div>
                   
                </Container>
            </div>
        </div>
    )
}

export default Cart