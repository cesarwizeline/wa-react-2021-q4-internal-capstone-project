import styled from 'styled-components';

export const QtySelectorContent = styled.div`
  align-items: center !important;
  margin: 20px 0px;

  text-align: center;
`;
export const QuantityButton = styled.button`
  padding: 11px;
  margin: 0px;
  color: #777;
  border: 1px solid #777;
  background: white;
  &:first-child {
    border-radius: 5px 0px 0px 5px;
  }
  &:last-child {
    border-radius: 0px 5px 5px 0px;
  }
`;
export const QuantityInput = styled.input`
  padding: 10px;
  width: 30%;
  text-align: center;
`;
