// context.jsx
import { createContext, useContext, useEffect, useState } from "react";

// Context yaratish
const LikeContext = createContext();

// Contextni ishlatish uchun hook
export const useLike = () => useContext(LikeContext);

// LikeProvider komponenti
export const LikeProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState(() => {
    const savedLikes = localStorage.getItem("likedProducts");
    return savedLikes ? JSON.parse(savedLikes) : [];
  });

  // likedProducts-ni localStorage-ga saqlash
  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  // Mahsulotni yoqtirish yoki yoqtirilganlar ro'yxatidan o'chirish
  const toggleLike = (product) => {
    setLikedProducts((prevLikes) =>
      prevLikes.some((p) => p.id === product.id)
        ? prevLikes.filter((p) => p.id !== product.id)
        : [...prevLikes, product]
    );
  };

  return (
    <LikeContext.Provider value={{ likedProducts, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};
