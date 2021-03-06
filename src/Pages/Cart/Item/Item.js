import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import PurchaseModal from '../../Home/BannerProduct/PurchaseModal';

const Item = ({item}) => {

    const {image, title, description, price} = item;


    const [modalShow, setModalShow] = React.useState(false);
    const handleModal = () =>{
        console.log('clicked');
        setModalShow(true);
    }

    return (
        <Row xs={1} md={2} className="border border-1 rounded mt-2 mb-1 py-3">
            <Col md={4}>
                <img src={image} className="trending-product-img" alt="" />
            </Col>
            <Col md={8} className="text-start">
                <h6>{title}</h6>
                <small className="d-block">{description}</small>
                <b>Price : ${price}</b>
                <div className="d-flex align-items-center">
                <p><small><Rating
                                initialRating={item.rating?.rate}
                                readonly
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                />({item.rating?.count})
                    </small>
                </p>
                </div>
                <button className="btn-general" onClick={handleModal}>Purchase Now</button>
            </Col>
            <PurchaseModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
        </Row>
    );
};

export default Item;