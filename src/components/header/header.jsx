import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import ModalWrapper from "../modalWrapper/modal";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [value, setValue] = useState();
  const { t, i18n } = useTranslation();

  const toggleLeague = () => {
    const newLang = i18n.language === "ru" ? "uz" : "ru";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="header">
      <div className="menu_top">
        <div className="logo">
          <a href="/"><img src="/assets/header/img/asaxiy-logo.svg" alt="" /></a>
        </div>
        <button className="category_button">{t('header.category')}</button>
        <div className="search">
          <input type="text" placeholder={t('header.search_placeholder')} className="search_input" />
          <button className="search_button">{t('header.search')}</button>
        </div>
        <div className="icons">
          <NavLink to="/fight" className="icon_link"><img src="/assets/header/icon/figth.svg" alt="" />{t('header.compare')}</NavLink>
          <NavLink to="/buy" className="icon_link"> <img style={{ width: '20px' }} src="/assets/header/icon/payment.svg" alt="" />{t('header.pay')}</NavLink>
          <NavLink to="/trak" className="icon_link"> <img style={{ width: '20px' }} src="/assets/header/icon/tracker.svg" alt="" />{t('header.track')}</NavLink>
          <NavLink to="/Korzina" className="icon_link"><img style={{ width: '20px' }} src="/assets/header/icon/cart.svg" alt="" />{t('header.cart')}</NavLink>
          <NavLink to="/like" className="icon_link"> <img style={{ width: '20px' }} src="/assets/header/icon/heart.svg" alt="" /> <span style={{ position: 'relative', right: '7px' }}>{t('header.favorites')}</span></NavLink>
          <NavLink to="" className="icon_link"><img style={{ width: '15px' }} src="/assets/header/icon/avatar.svg" alt="" onClick={() => setisModalOpen((p) => !p)} /> <span style={{ position: 'relative', left: '5px' }}>{t('header.login')}</span> </NavLink>
          <button className="lang" onClick={toggleLeague}>{t('header.language')}</button>
        </div>
      </div>
      <hr />
      <div className="menu_bottom">
        <a href="/discounts" className="menu_link">{t('header.discounts')}</a>
        <a href="/0-0-6" className="menu_link">0-0-6</a>
        <a href="/smartphones" className="menu_link">{t('header.smartphones')}</a>
        <a href="/appliances" className="menu_link">{t('header.appliances')}</a>
        <a href="/books" className="menu_link">{t('header.books')}</a>
        <a href="/laptops" className="menu_link">{t('header.laptops')}</a>
        <a href="/bestsellers" className="menu_link">{t('header.bestsellers')}</a>
      </div>
      {isModalOpen && (
        <ModalWrapper open={isModalOpen} onClose={() => setisModalOpen(false)}>
          <h1>{t('header.modal_title')}</h1>
          <label>{t('header.phone')}</label>
          <PhoneInput value={value} onChange={setValue} />
          <button className="activate-btn">{t('header.get_activation_code')}</button>
          <p>{t('header.or')}</p>
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
