import { createContext, useState } from "react";

const GlobalContext = createContext(null);

const GlobalState = ({children}) => {
  const [isFav, setIsFav] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ isFav, setIsFav }}
    >
        {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
