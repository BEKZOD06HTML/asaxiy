import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./mag.css";

const Mag = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [dataLength, setDataLength] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortType, setSortType] = useState("");
  const [likedProducts, setLikedProducts] = useState(() => {
    const savedLikes = localStorage.getItem("likedProducts");
    return savedLikes ? JSON.parse(savedLikes) : [];
  });
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
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const toggleLike = (product) => {
    if (likedProducts.some((p) => p.id === product.id)) {
      setLikedProducts(likedProducts.filter((p) => p.id !== product.id));
    } else {
      setLikedProducts([...likedProducts, product]);
    }
  };

  const sortProducts = (products) => {
    if (!sortType) return products;

    return [...products].sort((a, b) => {
      if (sortType === "name-asc") return a.title.localeCompare(b.title);
      if (sortType === "name-desc") return b.title.localeCompare(a.title);
      if (sortType === "price-asc") return a.price - b.price;
      if (sortType === "price-desc") return b.price - a.price;
      if (sortType === "rating-asc") return a.rating - b.rating;
      if (sortType === "rating-desc") return b.rating - a.rating;
      return 0;
    });
  };

  return (
    <div className="container">
      <Header likeCount={likedProducts.length} />

      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      <div className="filters">
        <div className="dropdown">
          <button className="dropdown-btn">Имя</button>
          <div className="dropdown-content">
            <button onClick={() => setSortType("name-asc")}>A-Z</button>
            <button onClick={() => setSortType("name-desc")}>Z-A</button>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-btn">Цена</button>
          <div className="dropdown-content">
            <button onClick={() => setSortType("price-asc")}>высокая-низкая</button>
            <button onClick={() => setSortType("price-desc")}>низкая-высокая</button>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-btn">Рейтинг</button>
          <div className="dropdown-content">
            <button onClick={() => setSortType("rating-asc")}>Низкий</button>
            <button onClick={() => setSortType("rating-desc")}>Высокий</button>
          </div>
        </div>

        <button className="filer" onClick={() => setSortType("")}> Сбросить</button>
      </div>

      <ul className="cards">
        {sortProducts(products).map((product) => (
          <li onClick={() => setSelectedProduct(product)} className="card" key={product.id}>
            <img className="card_img" src={product.thumbnail} alt={product.title} />
            <div className="card_content">
              <b className="product_title">{product.title}</b>
              <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
              <span className="old">
                {(product.price * 1.2 * 13000).toLocaleString()} so'm <span className="skidka">12%</span>
              </span>
              <span className="new">{(product.price * 13000).toLocaleString()} so'm</span>
              <div className="btns">
                <button className="btn2">Kупить в один клик</button>
                <button className="btn3" onClick={() => toggleLike(product)}>
                  {likedProducts.some((p) => p.id === product.id) ? <img src="./assets/qizil.png" alt="" /> : <img src="./assets/heart.png" alt="" />}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {products.length > 0 && dataLength > limit * count && (
        <button onClick={() => setCount((prev) => prev + 1)} className="btn show-more">
          Ещё?!
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Mag;
