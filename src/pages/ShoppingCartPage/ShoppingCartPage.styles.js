import styled from 'styled-components';

export const ShoppingCartContent = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;
export const ShoppingCartTitle = styled.h1`
  text-align: center;
`;
export const TableProducts = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  text-align: center;
`;
export const ProductsRow = styled.div`
  padding: 10px 20px;
  display: grid;
  max-width: 1100px;
  grid-template-columns: 5% 20% 35% 25% 15%;

  @media (max-width: 768px) {
    text-align: center;
    grid-template-columns: none;
    border-bottom: 1px solid gray;
  }
`;
export const RowElement = styled.div`
  align-self: center;
  &.center {
    text-align: center;
  }
`;
export const TableResume = styled.div`
  padding: 20px;
`;

export const DeleteButton = styled.div`
  color: #bc2f42;
  &:hover {
    cursor: pointer;
  }
`;

export const CheckoutLabels = styled.span`
  margin: 0px 20px;
  font-size: 23px;
  font-weight: bold;
  color: #535353;
`;
