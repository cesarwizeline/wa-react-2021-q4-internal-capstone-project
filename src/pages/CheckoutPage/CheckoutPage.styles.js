import styled from 'styled-components';

export const CheckoutPageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;
export const ProductsSIde = styled.div`
  grid-column: 2;
  display: grid;
`;
export const CheckoutActions = styled.div`
  grid-column: 1;
`;

export const Form = styled.form`
  width: 400px;
  margin: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
    margin: 20px 5px;
  }
`;
