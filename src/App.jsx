import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Fight from './pages/fight/fight';
import Buy from './pages/buy/buy';
import Trak from './pages/trak/trak';
import Login from './pages/login/login';
import Product from './pages/product/product';
import Like from './pages/like/Like';
import Korzina from './pages/korzina/Korzina';
import Form from './components/form/Form';
import { LikeProvider } from './components/context/context'; // ✅ LikeProvider import qilindi
import "./components/utils/i18n";

const App = () => {
  return (
    <LikeProvider> {/* ✅ Butun ilovani LikeProvider ichiga o'rab oldik */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fight" element={<Fight />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/trak" element={<Trak />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/like" element={<Like />} />
          <Route path="/korzina" element={<Korzina />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </LikeProvider>
  );
};

export default App;
