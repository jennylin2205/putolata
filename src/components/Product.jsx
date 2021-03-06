import React from 'react';
import '../assets/css/product.css';
import addtocart from '../assets/img/Image 16.png';
import imgproduct from '../assets/img/Image 6.png'

function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <div className="product__addbutton">
                    <button className="product__add"><img className='addbutton' src={addtocart} alt=""/></button>
                </div>
                {/* <img src={imgproduct} alt="" className="product__img"/> */}
                <div className="product__img">
                    <img src={image} alt="" className="img"/>
                </div>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <i class="fa fa-star"></i>
                    ))}
                </div>
                <p className="product__title">{title}</p>
                <p className="product__price">{price} VNĐ</p>
            </div>
        </div>
    )
}

export default Product