import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import './form.css';

const form = () => {
  const navigate = useNavigate();
g
  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <h2>Оформить заказ</h2>

        <form className="order-form">
          <div className="form-group">
            <label>Телефон *</label>
            <input type="text" placeholder="998 __ ___ __ __" />
          </div>

          <div className="form-group">
            <label>ФИО *</label>
            <input type="text" placeholder="ФИО" />
          </div>

          <div className="form-group">
            <label>Регион *</label>
            <select>
              <option>Выберите регион</option>
            </select>
          </div>

          <div className="form-group">
            <label>Город *</label>
            <input type="text" placeholder="Выберите город" />
          </div>

          <div className="delivery-method">
            <h3>Способ доставки *</h3>
            <div className="delivery-options">
              <div className="option active">
                <h4>До двери</h4>
                <p>Стоимость доставки: 30 000 сум</p>
              </div>
              <div className="option">
                <h4>Пункты выдачи</h4>
                <p>Бесплатная доставка</p>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Адрес</label>
            <input type="text" placeholder="Введите адрес" />
          </div>

          <div className="form-group">
            <label>Ориентир</label>
            <input type="text" placeholder="Ориентир" />
          </div>

          <div className="payment-method">
            <h3>Способ оплаты</h3>
            <div className="payment-options">
              <div className="option">Картой онлайн</div>
              <div className="option">Когда получить</div>
              <div className="option active">Оплата наличными</div>
            </div>
          </div>

          <div className="form-group checkbox">
            <input type="checkbox" id="agreement" />
            <label htmlFor="agreement">Я согласен с условиями покупки товаров</label>
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">Оформить</button>
            <button type="button" className="back-btn" onClick={handleBack}>Назад</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default form;
