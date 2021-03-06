import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Trending.css';

const Trending = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('/trending.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleClick = () =>{
        navigate('/allProducts');
    }
    
    return (
        <Container className="trending-product">
            <div className="d-flex justify-content-between mb-3">
                <h4><b>Trending Clothes</b></h4>
                <button className="btn-general" onClick={handleClick}>View all</button>
            </div>
            <Row xs={1} className="g-3">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    ></Product>)
                }
            </Row>
        </Container>
    );
};

export default Trending;