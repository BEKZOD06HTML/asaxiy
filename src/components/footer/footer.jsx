import React from "react";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer>

      <div className="info-banner">
        <div className="info-box">
          <img src="./assets/footer/img/card.svg" alt="Icon" />
          <div>
            <h3>Больше не нужно ходить на базар</h3>
            <p>У нас выгодные цены и доставка до дома</p>
          </div>
        </div>
        <div className="info-box">
          <img src="./assets/footer/img/card.svg" alt="Icon" />
          <div>
            <h3>Быстрая доставка</h3>
            <p>Наш сервис удивит вас</p>
          </div>
        </div>
        <div className="info-box">
          <img src="./assets/footer/img/fast.svg" alt="Icon" />
          <div>
            <h3>Удобства для вас</h3>
            <p>Быстрое оформление и гарантия на возврат</p>
          </div>
        </div>
        <div className="info-box">
          <img src="./assets/footer/img/return.svg" alt="Icon" />
          <div>
            <h3>Рассрочка</h3>
            <p>Без предоплаты на 3, 6 или 12 месяцев</p>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-column">
          <h4>Информация</h4>
          <ul>
            <li>Часто задаваемые вопросы</li>
            <li>Новости</li>
            <li>Блог</li>
            <li>Наши бренды</li>
            <li>Карьера в Asaxiy</li>
            <li>Оферта для рассрочки</li>
            <li>Публичная оферта</li>
            <li>О нас</li>
            <li>Карта сайта</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Для связи</h4>
          <p><img className="iconcas" src="./assets/footer/icon/phone.png" alt="" /> +998 71 200 01 05</p>
          <p><img className="iconcas" src="./assets/footer/icon/mail.png" alt="" /> info@asaxiy.uz</p>
          <p><img className="iconcas" src="./assets/footer/icon/telegram.png" alt="" /> Telegram bot</p>
          <p><img className="iconcas" src="./assets/footer/icon/location.png" alt="" /> улица Чиланзар 45/2, Ташкент</p>
          <h4>Программы лояльности</h4>
          <p>Статус «El-yurt ishonchi»</p>
          <p>«Asaxiy Plus»</p>
          <p>Оферта «Asaxiy Plus»</p>
        </div>

        <div className="footer-column">
          <h4>Доставка и магазины</h4>
          <button><img style={{width: '14px', height: '14px'}} src="./assets/footer/icon/store.svg" alt="" />  <span>Наши магазины</span></button>
          <button><img style={{width: '14px', height: '14px'}}  src="./assets/footer/icon/delivery.svg" alt="" />  <span>Пункты выдачи</span></button>
          <button><img style={{width: '14px', height: '14px' , }} src="./assets/footer/icon/deliver.svg" alt="" />  <span>  Доставка</span></button>
        </div>

        <div className="footer-column">
          <h4>Виды оплаты</h4>
          <div className="payment-icons">
    <span className="payment"><img  src="./assets/footer/img/uzum.svg" alt="" /></span>
            <span className="payment"><img  src="./assets/footer/img/payme.svg" alt="" /></span>
            <span className="payment"><img  src="./assets/footer/img/visa.svg" alt="" /></span>
            <span className="payment"><img  src="./assets/footer/img/mastercard.svg" alt="" /></span>
            <span className="payment"><img  src="./assets/footer/img/humo.svg" alt="" /></span>
            <span className="payment"><img  src="./assets/footer/img/uzcard.svg" alt="" /></span>
          </div>
          <h4>Мы в соц. сетях</h4>
          <div className="social-icons">
            <img  style={{width: '14px', height: '14px'}} src="./assets/footer/icon/facebook.png" alt="" />
            <img  style={{width: '14px', height: '14px'}} src="./assets/footer/icon/telegra.png" alt="" />
            <img  style={{width: '14px', height: '14px'}} src="./assets/footer/icon/instagram.png" alt="" />
            <img  style={{width: '14px', height: '14px'}} src="./assets/footer/icon/youtube.png" alt="" />
            <img  style={{width: '14px', height: '14px'}} src="./assets/footer/icon/wi-fi-icon.png" alt="" />
          </div>
        </div>
      </div>

 
    </footer>
  );
};

export default Footer;
