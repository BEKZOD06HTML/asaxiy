import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./like.css"
import { useTranslation } from "react-i18next";

const LikePage = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const savedLikes = localStorage.getItem("likedProducts");
    if (savedLikes) {
      setLikedProducts(JSON.parse(savedLikes));
    }
  }, []);

  const removeLike = (id) => {
    const updatedLikes = likedProducts.filter((product) => product.id !== id);
    setLikedProducts(updatedLikes);
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
  };

  return (
    <div>
      <Header likeCount={likedProducts.length} />
      <div className="container">
        {likedProducts.length === 0 ? (
          <p>Sevimlilar ro'yxati bo'sh.</p>
        ) : (
          <ul className="cards">
            {likedProducts.map((product) => (
              <li key={product.id} className="card">
                <img src={product.thumbnail} alt={product.title} className="card_img" />
                <div className="card_content">
                  <b className="product_title">{product.title}</b>
                  <Rating name="rating" value={product.rating} precision={0.5} readOnly />
                  <span className="new">{(product.price * 13000).toLocaleString()} so'm</span>
                  <div className="btns">
                    <button className="btn2" onClick={() => navigate(`/product/${product.id}`)}>
                    {t('mag.more_details')}
                    </button>
                    <button className="btn3" onClick={() => removeLike(product.id)}>
                      <img src="./assets/qizil.png" alt="" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LikePage;
