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
`;
export const ProductsRow = styled.div`
  padding: 20px;
  display: grid;
  max-width: 1100px;
  grid-template-columns: 5% 20% 35% 25% 15%;

  @media (max-width: 768px) {
    flex: 12;
    max-width: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 10% 40% 50%;
      grid-auto-columns: 1fr;
      grid-template-areas:
        'remove image name'
        '.. .. actions price';
    }
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
  flex: 2;
`;

export const DeleteButton = styled.div`
  color: #bc2f42;
  &:hover {
    cursor: pointer;
  }
`;
