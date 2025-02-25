import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './korzina.css';

const Korzina = () => {
  const [cart, setCart] = useState([]);
  const [likedProducts, setLikedProducts] = useState(() => {
    const savedLikes = localStorage.getItem("likedProducts");
    return savedLikes ? JSON.parse(savedLikes) : [];
  });

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    } catch (error) {
      console.error("Savatni yuklashda xatolik:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const toggleLike = (product) => {
    setLikedProducts((prevLiked) => {
      const isLiked = prevLiked.some((p) => p.id === product.id);
      const updatedLikes = isLiked
        ? prevLiked.filter((p) => p.id !== product.id)
        : [...prevLiked, product];
      return updatedLikes;
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const totalSum = cart.reduce((acc, item) => acc + item.price * 13000 * item.quantity, 0).toLocaleString('ru-RU');

  return (
    <div>
      <Header />
      <div className="korzina">
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} className="item-image" />

                <div className="item-details">
                  <h2>{item.title}</h2>

                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>

                  <div className="price-details">
                    <span className="old-price">{Math.round(item.price * 1.2 * 13000) .toLocaleString('ru-RU')} сум  <a href=""><span className="skidka">12%</span></a></span>
                    <span className="new-price">{(item.price * 13000).toLocaleString('ru-RU')} сум</span>
                  </div>
                </div>

                <button className="likes" onClick={() => toggleLike(item)}>
                  {likedProducts.some((p) => p.id === item.id) ? (
                    <img src="/assets/qizil.png" alt="Like" />
                  ) : (
                    <img src="/assets/heart.png" alt="Unlike" />
                  )}
                </button>
                <button className="remove-btn" onClick={() => removeItem(item.id)}> <img src="./assets/delete.png" alt="" /></button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>В корзине {cart.length} товара</p>
            <h3>Общая сумма: {totalSum} сум</h3>
            <hr />
         g
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Korzina;
