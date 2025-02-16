import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@mui/material";
import "./mag.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [dataLength, setDataLength] = useState(0);
  const [sortByName, setSortByName] = useState("asc");
  const [sortByPrice, setSortByPrice] = useState("asc");
  const [sortByRating, setSortByRating] = useState("asc");
  const navigate = useNavigate ();
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

  const handleSortByName = (event) => {
    const order = event.target.value;
    setSortByName(order);
    setProducts([...products].sort((a, b) => 
      order === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    ));
  };

  const handleSortByPrice = (event) => {
    const order = event.target.value;
    setSortByPrice(order);
    setProducts([...products].sort((a, b) => 
      order === "asc" ? a.price - b.price : b.price - a.price
    ));
  };

  const handleSortByRating = (event) => {
    const order = event.target.value;
    setSortByRating(order);
    setProducts([...products].sort((a, b) => 
      order === "asc" ? a.rating - b.rating : b.rating - a.rating
    ));
  };

  return (
    <div className="container">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      <div className="filter-buttons">
        <div>
          <label>Nomi:</label>
          <select onChange={handleSortByName} value={sortByName}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        <div>
          <label>Narxi:</label>
          <select onChange={handleSortByPrice} value={sortByPrice}>
            <option value="asc">Arzon - Qimmat</option>
            <option value="desc">Qimmat - Arzon</option>
          </select>
        </div>
        <div>
          <label>Reyting:</label>
          <select onChange={handleSortByRating} value={sortByRating}>
            <option value="asc">O‘sish</option>
            <option value="desc">Kamayish</option>
          </select>
        </div>
      </div>

      <ul className="cards">
        {products.map((product) => (
          <li onClick={() => navigate(`/product/${product.id}`)} className="card" key={product.id}>
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
              <div className="btns">
                <button className="btn2">Kупить в один клик</button>
                <button className="btn3"><img style={{ width: '20px' }} src="./assets/header/icon/cart.svg" alt="" /></button>
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
    </div>
  );
};

export default Products;