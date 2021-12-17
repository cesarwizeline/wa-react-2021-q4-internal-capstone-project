import styled from 'styled-components';

export const CheckoutPageContent = styled.div`
  align-self: center;
  width: 100%;
`;

export const Form = styled.form`
  width: 1200px;
  align-self: center;
  margin: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
    margin: 20px 5px;
  }
`;
