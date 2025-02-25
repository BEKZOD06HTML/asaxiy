import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [count, setCount] = useState(1);
  return (
    <Context.Provider value={{ count, setCount }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;

export const useStateValue = () => {
  return useContext(Context);
};
