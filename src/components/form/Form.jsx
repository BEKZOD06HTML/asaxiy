import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import './form.css';
import { useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form';

const Form = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <h2>{t('form.title')}</h2>

        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>{t('form.phone')}</label>
            <input
              type="text"
              placeholder="998 __ ___ __ __"
              {...register("phone", { required: t('Error') })}
            />
            {errors.phone && errors.phone.message && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>{t('form.fio')}</label>
            <input
              type="text"
              placeholder={t('form.fio')}
              {...register("fio", { required: t('Error') })}
            />
            {errors.fio && errors.fio.message && (
              <p className="error-message">{errors.fio.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>{t('form.region')}</label>
            <select {...register("region", { required: t('Error') })}>
              <option value="">{t('form.selectRegion')}</option>
            </select>
            {errors.region && errors.region.message && (
              <p className="error-message">{errors.region.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>{t('form.city')}</label>
            <input
              type="text"
              placeholder={t('form.selectCity')}
              {...register("city", { required: t('Error') })}
            />
            {errors.city && errors.city.message && (
              <p className="error-message">{errors.city.message}</p>
            )}
          </div>

          <div className="delivery-method">
            <h3>{t('form.deliveryMethod')}</h3>
            <div className="delivery-options">
              <div className="option active">
                <h4>{t('form.toDoor')}</h4>
                <p>{t('form.deliveryCost')}</p>
              </div>
              <div className="option">
                <h4>{t('form.pickup')}</h4>
                <p>{t('form.freeDelivery')}</p>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>{t('form.address')}</label>
            <input
              type="text"
              placeholder={t('form.address')}
              {...register("address")}
            />
          </div>

          <div className="form-group">
            <label>{t('form.landmark')}</label>
            <input
              type="text"
              placeholder={t('form.landmark')}
              {...register("landmark")}
            />
          </div>

          <div className="payment-method">
            <h3>{t('form.paymentMethod')}</h3>
            <div className="payment-options">
              <div className="option">{t('form.onlinePayment')}</div>
              <div className="option">{t('form.onDelivery')}</div>
              <div className="option active">{t('form.cashPayment')}</div>
            </div>
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="agreement"
              {...register("agreement", { required: t('Error') })}
            />
            <label htmlFor="agreement">{t('form.agree')}</label>
            {errors.agreement && errors.agreement.message && (
              <p className="error-message">{errors.agreement.message}</p>
            )}
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">{t('form.submit')}</button>
            <button type="button" className="back-btn" onClick={handleBack}>{t('form.back')}</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
