import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [suppliers, setSuppliers] = useState(
    JSON.parse(localStorage.getItem("suppliers")) || []
  );

  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("suppliers", JSON.stringify(suppliers));
  }, [suppliers]);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        suppliers,
        setSuppliers,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};