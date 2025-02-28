import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Rating } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./carusel.css";
import { useTranslation } from "react-i18next";
import { useLike } from "../context/context";

const Carousel = () => {
  const { t } = useTranslation();
  const { likedProducts, toggleLike } = useLike();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const limit = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://dummyjson.com/products", {
          params: { limit },
        });
        setProducts(response.data.products);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...cart];
      const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        updatedCart[existingProductIndex].quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log("Yangilangan savat:", updatedCart);
    } catch (error) {
      console.error("Savatga qo'shishda xatolik:", error);
    }
  };

  return (
    <div className="container">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
              className="card"
            >
              <img className="card_img" src={product.thumbnail} alt={product.title} />
              <div className="card_content">
                <b className="product_title">{product.title}</b>
                <Rating name="half-rating-read" value={product.rating || 0} precision={0.5} readOnly />
                <span className="old">
                  {(product.price * 1.2 * 13000).toLocaleString()} сум
                  <span className="skidka">12%</span>
                </span>
                <span className="new">{(product.price * 13000).toLocaleString()} сум</span>
                <div className="btns">
                  <button
                    className="btn2"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    {t('mag.buy_now')}
                  </button>
                  <button
                    className="btn3"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(product);
                    }}
                  >
                    {likedProducts.some((p) => p.id === product.id) ? (
                      <img src="/assets/qizil.png" alt="Liked" />
                    ) : (
                      <img src="/assets/heart.png" alt="Like" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;