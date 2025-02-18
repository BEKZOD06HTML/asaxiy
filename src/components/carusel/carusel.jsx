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

const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const limit = 10;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products", { params: { limit } })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Xatolik:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div onClick={() => navigate(`/product/${product.id}`)} className="card">
              <img className="card_img" src={product.thumbnail} alt={product.title} />
              <div className="card_content">
                <b className="product_title">{product.title}</b>
                <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                <span className="old">
                  {(product.price * 1.2 * 13000).toLocaleString()} so'm 
                  <span className="skidka">12%</span>
                </span>
                <span className="new">{(product.price * 13000).toLocaleString()} so'm</span>
                <div className="btns">
                  <button className="btn2">Kупить в один клик</button>
                  <button className="btn3">
                    <img style={{ width: '20px' }} src="./assets/header/icon/cart.svg" alt="cart" />
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
