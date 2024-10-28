import { createContext, useState } from "react";

const CounterContext = createContext(0);
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <CounterContext.Provider value={{ count, handleCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };
