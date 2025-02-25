import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import ModalWrapper from "../modalWrapper/modal";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
// import { useStateValue } from "../../context/Provider";
const Header = () => {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [value, setValue] = useState()
  // const {count} = useStateValue ();
  return (
    <div className="header">
      <div className="menu_top">
        <div className="logo">
          <a href="/"><img src="/assets/header/img/asaxiy-logo.svg" alt="" /></a>
        </div>
        <button className="category_button">Категории</button>
        <div className="search">
          <input type="text" placeholder="Поиск..." className="search_input" />
          <button className="search_button">Искать</button>
        </div>
        <div className="icons">
          <NavLink to="/fight" className="icon_link"><img src="/assets/header/icon/figth.svg" alt="" />Сравнение</NavLink>
          <NavLink to="/buy" className="icon_link"> <img style={{ width: '20px' }} src="/assets/header/icon/payment.svg" alt="" />Оплатить</NavLink>
          <NavLink to="/trak" className="icon_link"> <img style={{ width: '20px' }} src="/assets/header/icon/tracker.svg" alt="" />Отследить</NavLink>
          <NavLink to="/cart" className="icon_link"><img style={{ width: '20px' }} src="/assets/header/icon/cart.svg" alt="" />Корзина</NavLink>
          <NavLink to="/like" className="icon_link"> <img style={{ width: '20px' }} src="/assets/header/icon/heart.svg" alt="" /> <span style={{ position: 'relative', right: '7px' }}>Избранное </span></NavLink>
          <NavLink to="" className="icon_link"> <img src="/assets/header/icon/language-uz.svg" alt="" /><span style={{ position: 'relative', left: '' }}>O'zbek</span></NavLink>
          <NavLink to="" className="icon_link"><img style={{ width: '20px', }} src="/assets/header/icon/avatar.svg" alt="" onClick={() => setisModalOpen((p) => !p)} /> <span style={{ position: 'relative', left: '5px' }}>Войти</span> </NavLink>
        </div>
      </div>
      <hr />
      <div className="menu_bottom">
        <a href="/discounts" className="menu_link">Скидки</a>
        <a href="/0-0-6" className="menu_link">0-0-6</a>
        <a href="/smartphones" className="menu_link">Смартфоны</a>
        <a href="/appliances" className="menu_link">Бытовая техника</a>
        <a href="/books" className="menu_link">Книги</a>
        <a href="/laptops" className="menu_link">Ноутбуки</a>
        <a href="/bestsellers" className="menu_link">Бестселлер 2024</a>
      </div>
      {isModalOpen && (
        <ModalWrapper open={isModalOpen} onClose={() => setisModalOpen(false)}>
          <h1>Вход или создать личный кабинет</h1>
          <label>Телефон</label>
          <PhoneInput value={value} onChange={setValue}  />
          <button className="activate-btn">Получить код активации</button>
          <p>или</p>
          <div className="social-buttons">
            <button className="google-btn">G</button>
            <button className="facebook-btn">F</button>
          </div>
          <button onClick={() => setisModalOpen(false)} className="close-btn">x</button>
        </ModalWrapper>
      )}
    </div>

  );
};

export default Header;
