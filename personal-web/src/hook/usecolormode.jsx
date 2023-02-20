import useLocalStorage from "./uselocalstorage";
import { useEffect } from "react";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  useEffect(() => {
    const className = "dark";
    const BodyClasses = window.document.body.classList;

    colorMode === "light"
      ? BodyClasses.add(className)
      : BodyClasses.remove(className);
  }, [colorMode]);
  return [colorMode, setColorMode];
};

export default useColorMode;
