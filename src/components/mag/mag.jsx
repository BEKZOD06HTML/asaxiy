import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./mag.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [dataLength, setDataLength] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const limit = 5;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products", { params: { limit: limit * count } })
      .then((res) => {
        setProducts(res.data.products);
        setDataLength(res.data.total);
      })
      .catch((err) => console.error("Xatolik:", err))
      .finally(() => setLoading(false));
  }, [count]);

  useEffect(() => {
    if (selectedProduct) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [selectedProduct]);

  return (
    <div className="container">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      <ul className="cards">
        {products.map((product) => (
          <li onClick={() => setSelectedProduct(product)} className="card" key={product.id}>
            <img className="card_img" src={product.thumbnail} alt={product.title} />
            <div className="card_content">
              <b className="product_title">{product.title}</b>
              <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
              <span className="old">
                {(product.price * 1.2 * 13000).toLocaleString()} so'm <span className="skidka">12%</span>
              </span>
              <span className="new">
                {(product.price * 13000).toLocaleString()} so'm
              </span>
            </div>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>×</button>
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className="modal-img" />
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <Rating name="half-rating-read" defaultValue={selectedProduct.rating} precision={0.5} readOnly />
            <span className="price">{(selectedProduct.price * 13000).toLocaleString()} so'm</span>
            <button className="details-btn" onClick={() => navigate(`/product/${selectedProduct.id}`)}>
              Подробнее...
            </button>
          </div>
        </div>
      )}

      {products.length > 0 && dataLength > limit * count && (
        <button onClick={() => setCount((prev) => prev + 1)} className="btn show-more">
          Ещё?!
        </button>
      )}
    </div>
  );
};

export default Products;
