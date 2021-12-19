import styled from 'styled-components';
export const HeaderContainer = styled.nav`
  background-color: #3e3e3e;
  color: white;
  z-index: 100;
  position: fixed;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0px;
    padding: 0px;
  }
`;

export const ShowMenuBtn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const HeaderMenu = styled.ul`
  list-style: none;
  font-size: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin: 0px;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const MenuItem = styled.li`
  margin: 0px;
  @media (max-width: 768px) {
    &.searcher {
      display: none;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: white;
  }
`;
export const MenuLogo = styled.li`
  font-size: 20px;
  padding: 10px 10px 10px 0;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: white;
  }
`;
export const ProductsQuantityCart = styled.span`
  font-size: 10px;
  background-color: white;
  border-radius: 50%;
  color: black;
  width: 14px;
  height: 14px;
  line-height: 14px;
  text-align: center;
  position: absolute;
  border: 1px solid gray;
`;
