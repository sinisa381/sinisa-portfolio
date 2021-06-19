import { useLayoutEffect, useState, createContext } from "react";
import throttle from "lodash/throttle";
console.log(throttle);

export const ViewportContext = createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(() => window.innerWidth);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width }}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportProvider;
