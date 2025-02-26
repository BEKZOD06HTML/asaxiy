import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="info-banner">
        <div className="info-box">
          <img src="/assets/footer/img/card.svg" alt="Icon" />
          <div>
            <h3>{t('footer.banner.market')}</h3>
            <p>{t('footer.banner.delivery')}</p>
          </div>
        </div>
        <div className="info-box">
          <img src="/assets/footer/img/card.svg" alt="Icon" />
          <div>
            <h3>{t('footer.banner.fast_delivery')}</h3>
            <p>{t('footer.banner.service')}</p>
          </div>
        </div>
        <div className="info-box">
          <img src="/assets/footer/img/fast.svg" alt="Icon" />
          <div>
            <h3>{t('footer.banner.comfort')}</h3>
            <p>{t('footer.banner.guarantee')}</p>
          </div>
        </div>
        <div className="info-box">
          <img src="/assets/footer/img/return.svg" alt="Icon" />
          <div>
            <h3>{t('footer.banner.installment')}</h3>
            <p>{t('footer.banner.payment_terms')}</p>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-column">
          <h4>{t('footer.info.title')}</h4>
          <ul>
            <li>{t('footer.info.faq')}</li>
            <li>{t('footer.info.news')}</li>
            <li>{t('footer.info.blog')}</li>
            <li>{t('footer.info.brands')}</li>
            <li>{t('footer.info.career')}</li>
            <li>{t('footer.info.installment_offer')}</li>
            <li>{t('footer.info.public_offer')}</li>
            <li>{t('footer.info.about')}</li>
            <li>{t('footer.info.sitemap')}</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t('footer.contact.title')}</h4>
          <p><img className="iconcas" src="/assets/footer/icon/phone.png" alt="" /> +998 71 200 01 05</p>
          <p><img className="iconcas" src="/assets/footer/icon/mail.png" alt="" /> info@asaxiy.uz</p>
          <p><img className="iconcas" src="/assets/footer/icon/telegram.png" alt="" /> Telegram bot</p>
          <p><img className="iconcas" src="/assets/footer/icon/location.png" alt="" /> {t('footer.contact.address')}</p>
          <h4>{t('footer.loyalty.title')}</h4>
          <p>{t('footer.loyalty.el_yurt')}</p>
          <p>{t('footer.loyalty.asaxiy_plus')}</p>
          <p>{t('footer.loyalty.offer')}</p>
        </div>

        <div className="footer-column">
          <h4>{t('footer.delivery.title')}</h4>
          <button><img style={{width: '14px', height: '14px'}} src="/assets/footer/icon/store.svg" alt="" /> {t('footer.delivery.stores')}</button>
          <button><img style={{width: '14px', height: '14px'}} src="/assets/footer/icon/delivery.svg" alt="" /> {t('footer.delivery.pickup')}</button>
          <button><img style={{width: '14px', height: '14px'}} src="/assets/footer/icon/deliver.svg" alt="" /> {t('footer.delivery.delivery')}</button>
        </div>

        <div className="footer-column">
          <h4>{t('footer.payment.title')}</h4>
          <div className="payment-icons">
            <span className="payment"><img src="/assets/footer/img/uzum.svg" alt="" /></span>
            <span className="payment"><img src="/assets/footer/img/payme.svg" alt="" /></span>
            <span className="payment"><img src="/assets/footer/img/visa.svg" alt="" /></span>
            <span className="payment"><img src="/assets/footer/img/mastercard.svg" alt="" /></span>
            <span className="payment"><img src="/assets/footer/img/humo.svg" alt="" /></span>
            <span className="payment"><img src="/assets/footer/img/uzcard.svg" alt="" /></span>
          </div>
          <h4>{t('footer.social.title')}</h4>
          <div className="social-icons">
            <img style={{width: '14px', height: '14px'}} src="/assets/footer/icon/facebook.png" alt="" />
            <img style={{width: '14px', height: '14px'}} src="/assets/footer/icon/telegra.png" alt="" />
            <img style={{width: '14px', height: '14px'}} src="/assets/footer/icon/instagram.png" alt="" />
            <img style={{width: '14px', height: '14px'}} src="/assets/footer/icon/youtube.png" alt="" />
            <img style={{width: '14px', height: '14px'}} src="/assets/footer/icon/wi-fi-icon.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
