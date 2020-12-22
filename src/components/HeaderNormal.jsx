import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import cart from "../assets/img/Cart.png";
import search from "../assets/img/search.png";
import account from "../assets/img/Account.png";
import Badge from "@material-ui/core/Badge";
import "../assets/css/headernormal.css";
import slogan from '../assets/img/slogan.png';

function HeaderNormal() {
    return (
        <div className="headerNormal">
            <nav className="headerNormal__nav">
                <ul className="headerNormal__left">
                    <Link to="/" className='link'>
                        <img src={logo} alt="" className="headerNormal__logo" />
                    </Link>

                    <li>
                        <Link to="/" className='link'>Trang chủ</Link>
                    </li>

                    <li className="headerNormal__dropdown">
                        <Link to="/" className='link' >Sản phẩm</Link>
                        <div className="dropdowncontentNormal">
                            <div className="headerNormal__submenu">
                                <div className="headerNormal__column">
                                    <Link to="/" className='link' className='headerNormal__subtitle'>ĐỒ ĂN</Link>
                                    <img src='https://image.freepik.com/free-photo/eastern-sweets-turkish-delight-lokum-with-nuts-top-view_114579-8401.jpg' alt="" className="headerNormal__columnImage" />
                                </div>

                                <div className="headerNormal__column">
                                    <div className='headerNormal__subcolumn'>
                                        <Link to="/" className='link'><i class="fas fa-atom"></i>Mứt</Link>
                                        <Link to="/" className='link'>Trái cây sấy</Link>
                                        <Link to="/" className='link'>Khô</Link>
                                        <Link to="/" className='link'>Kẹo</Link>
                                        <Link to="/" className='link'>Snack</Link>
                                        <Link to="/" className='link'>Bánh ngọt</Link>
                                        <Link to="/" className='link'>Ngũ cốc</Link>
                                        <Link to="/" className='link'>Hạt khô</Link>
                                    </div>
                                </div>

                                <div className="headerNormal__column">
                                    <Link className="link" className='headerNormal__subtitle' to="/">ĐỒ UỐNG</Link>
                                    <img src="https://image.freepik.com/free-psd/mockup-liquid-bottle-labels_53876-65817.jpg" alt="" className="headerNormal__columnImage" />
                                </div>

                                <div className="headerNormal__column">
                                    <div className='headerNormal__subcolumn'>
                                        <Link className="link" to="/">Nước khoáng</Link>
                                        <Link className="link" to="/">Sữa</Link>
                                        <Link className="link" to="/">Tăng lực</Link>
                                        <Link className="link" to="/">Dưỡng chất</Link>
                                        <Link className="link" to="/">Nước ngọt</Link>
                                        <Link className="link" to="/">Trà</Link>
                                        <Link className="link" to="/">Trà sữa</Link>
                                        <Link className="link" to="/">Nước có ga </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link className="link" to="/sales">Khuyến mãi</Link>
                    </li>

                    <li>
                        <Link className="link" to="/aboutus">Về chúng tôi</Link>
                    </li>
                </ul>

                <ul className="headerNormal__right">
                    <li className="headerNormal__search">
                        <input className="inputNormal" type="text"/>
                        <button><img src={search} className='searchNormal' alt=""/></button>
                    </li>

                    <li>
                        <Badge badgeContent={4} color="secondary">
                            <Link className="link" to='/cart'>
                                <img src={cart} className='headerNormal__icon' alt=""/>
                            </Link>
                        </Badge>
                    </li>

                    <li className="headerNormal__account">
                        <Link className="link" to='/account'>
                            <img src={account} alt="" className='headerNormal__icon' />
                        </Link>
                        <div className="headerNormal__signpane">
                            <div className="headerNormal__log">
                                <Link className="link" to='/register'><button className='btn-hover color-4'>Đăng ký</button></Link>
                                <Link className="link" to='/login'><button className='btn-hover color-4'>Đăng nhập</button></Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderNormal;
