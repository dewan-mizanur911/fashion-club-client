import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import './Product.css';
import love from '../../../../images/navigation/wishlist.svg';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({product}) => {
    const [disabled, setDisabled] = useState(false);
    const [clicked, setClicked] = useState(false);
    const {image, title, description, price, id} = product;
    const handleAddCart = (id) =>{
        setDisabled(true);
        fetch('https://fakestoreapi.com/carts/1',{
            method:"PATCH",
            body:JSON.stringify(
                {
                    userId: 1,
                    date: new Date(),
                    products:[{productId: id,quantity: 1}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                toast("Added to the cart")
            })
    };

    const handleClick = () =>{
        setClicked(true);
    };
    const handleFavorite =() =>{
        setClicked(false)
    }

    return (
        <Row xs={1} md={2} className=" py-1 g-4">
            <Col md={4}>
                <img src={image} className="trending-product-img" alt="" />
            </Col>
            <Col md={8} className="text-start">
                <h5>{title}</h5>
                <p><small>{description}</small></p>
                <del className="me-3">${price + (price*20/100)}</del>
                <b style={{fontSize: '18px'}}>${price}</b>
                <div className="d-flex my-1">
                <p className="pt-3"><small><Rating
                                initialRating={product.rating?.rate}
                                readonly
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                />({product.rating?.count})
                    </small>
                </p>
                {
                    !clicked ? <button className="btn-favorite ms-5" onClick={handleClick}>
                    <img src={love} className="favorite-img" alt="" />
                </button>
                :
                <button className="btn-favorite ms-5" onClick={handleFavorite}>{
                    <i className="fa-solid fa-heart favorite-icon d-block"></i>
                }</button>
                }

                </div>
                <button className="btn-general" onClick={()=> handleAddCart(id)} disabled={disabled}>Add to cart</button>
            </Col>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </Row>
    );
};

export default Product;