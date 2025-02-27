// mag.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModalWrapper from "../modalWrapper/modal";
import { useTranslation } from "react-i18next";
import { useLike } from "../context/context";
import "./mag.css";

const Mag = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [dataLength, setDataLength] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortType, setSortType] = useState("");
  const { likedProducts, toggleLike } = useLike();

  const limit = 5;

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

  const addToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProductIndex = cart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("Yangilangan savat:", cart);
    } catch (error) {
      console.error("Savatga qo'shishda xatolik:", error);
    }
  };

  const sortProducts = (products) => {
    if (!sortType) return products;

    return [...products].sort((a, b) => {
      switch (sortType) {
        case "name-alpha":
          return a.title.localeCompare(b.title);
        case "name-betta":
          return b.title.localeCompare(a.title);
        case "price-alpha":
          return a.price - b.price;
        case "price-betta":
          return b.price - a.price;
        case "rating-alpha":
          return a.rating - b.rating;
        case "rating-betta":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  };

  return (
    <div className="container">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      <ul className="cards">
        {sortProducts(products).map((product) => (
          <li className="card" key={product.id}>
            <img
              className="card_img"
              src={product.thumbnail}
              alt={product.title}
              onClick={() => setSelectedProduct(product)}
            />
            <div className="card_content">
              <b className="product_title">{product.title}</b>
              <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
              <span className="old">
                {(product.price * 1.2 * 13000).toLocaleString()} сум <span className="skidka">12%</span>
              </span>
              <span className="new">{(product.price * 13000).toLocaleString()} сум</span>
              <div className="btns">
                <button className="btn2" onClick={() => addToCart(product)}>{t('mag.buy_now')}</button>
                <button className="btn3" onClick={() => toggleLike(product)}>
                  {likedProducts.some((p) => p.id === product.id) ? (
                    <img src="./assets/qizil.png" alt="Liked" />
                  ) : (
                    <img src="./assets/heart.png" alt="Like" />
                  )}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {products.length > 0 && dataLength > limit * count && (
        <button onClick={() => setCount((prev) => prev + 1)} className="btn show-more">
          {t('mag.show_more')}
        </button>
      )}

      {selectedProduct && (
        <ModalWrapper onClose={() => setSelectedProduct(null)}>
          <h2>{selectedProduct.title}</h2>
          <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
          <p>{selectedProduct.description}</p>
          <button className="btn4" onClick={() => navigate(`./product/${selectedProduct.id}`)}>
            {t('mag.more_details')}
          </button>
        </ModalWrapper>
      )}
    </div>
  );
};

export default Mag;
