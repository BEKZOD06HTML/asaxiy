import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import './Product.css';

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => console.error("Xatolik:", err));
    }, [id]);

    return (
        <div>
            <Header />
            <div className='product-container'>
                <div className='product-image'>
                    <img className='card-img' src={product.thumbnail} alt={product.title} />
                </div>
                <div className='product-details'>
                    <h2 className='product-title'>{product.title}</h2>
                    <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                    <div className='price-container'>
                        <span className="old-price">
                            {(product.price * 1.2 * 13000).toLocaleString()} so'm <span className="discount">12%</span>
                        </span>
                        <span className="new-price">
                            {(product.price * 13000).toLocaleString()} so'm
                        </span>
                    </div>
                    <div className="btns">
                        <button className="btn-buy-now">Купить в один клик</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;