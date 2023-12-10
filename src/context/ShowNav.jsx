import { createContext, useEffect, useState } from "react";

const ShowNavContext = createContext();

export function ShowNavProvider({ children }) {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <ShowNavContext.Provider value={{ showNavBar, setShowNavBar }}>
      {children}
    </ShowNavContext.Provider>
  );
}

export default ShowNavContext;
