import React, { useContext } from 'react';
import {
  HeaderContainer,
  HeaderMenu,
  MenuLogo,
  MenuItem,
  ShowMenuBtn,
  ProductsQuantityCart,
} from './Header.styles';
import SearchInput from '../SearchInput';
import ThemeContext from '../../context/ThemeContext';
import CartContext from '../../context/CartContext';
import { HiShoppingCart } from 'react-icons/hi';
import { ImMenu } from 'react-icons/im';
import { Link } from 'react-router-dom';
const Header = () => {
  const { changeShowMenu } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);
  return (
    <HeaderContainer>
      <HeaderMenu>
        <ShowMenuBtn>
          <ImMenu onClick={changeShowMenu} />
        </ShowMenuBtn>

        <MenuLogo>
          <Link to="/"> Logo </Link>
        </MenuLogo>

        <MenuItem className="searcher">
          <SearchInput />
        </MenuItem>

        <MenuItem>
          <Link to={'/cart'}>
            <span style={{ fontSize: '20px' }}>
              <HiShoppingCart />
            </span>
            <ProductsQuantityCart>{cart.products.length}</ProductsQuantityCart>
          </Link>
        </MenuItem>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
