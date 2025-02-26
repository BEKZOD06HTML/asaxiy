import { createContext, useContext, useEffect, useState } from "react";

const LikeContext = createContext();

export const useLike = () => useContext(LikeContext);

export const LikeProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState(() => {
    const savedLikes = localStorage.getItem("likedProducts");
    return savedLikes ? JSON.parse(savedLikes) : [];
  });

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

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

export default LikeContext;
