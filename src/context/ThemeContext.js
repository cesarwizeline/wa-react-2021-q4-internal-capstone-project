import { createContext, useState, useContext } from 'react';
const initialState = window.width > 780;
// const initialState = false;
const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};
export const ThemeContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(initialState);
  const changeShowMenu = () => {
    return setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  const context = {
    showMenu: showMenu,
    changeShowMenu: changeShowMenu,
  };
  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContext;