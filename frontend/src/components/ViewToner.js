import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { Card, Col } from 'react-bootstrap';
import '../App.css';

const ViewToner = ({ product, userInfo }) => {
    const cat = product.category;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product, userInfo));
        window.location.reload();
    };

    return (
        <>
            {cat === "Tonner Products" &&
                <Col md={6} lg={4} sm={12}>
                    <Card className="shadow-lg m-4 rounded card" >

                        <Card.Body>
                            <div key={product._id} className="product">
                                <h3>{product.name}</h3>
                                <img src={"http://localhost:5000/backend/uploads" + product.image} alt={product.name} />
                                <div className="details">
                                    <span>{product.quantity} in stock</span>
                                    <span className="price">${product.price}</span>
                                </div>
                                <div className='btnCenter'>
                                    <button
                                        type='button'
                                        className='btn btn-warning btn-sm'
                                        disabled={product.quantity <= 0}
                                        onClick={handleAddToCart}

                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
            }
        </>

    )
}

export default ViewToner;