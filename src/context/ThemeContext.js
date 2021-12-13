import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
const initialState = window.innerWidth > 780;
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
ThemeContextProvider.propTypes = {
  children: PropTypes.any,
};
export default ThemeContext;
