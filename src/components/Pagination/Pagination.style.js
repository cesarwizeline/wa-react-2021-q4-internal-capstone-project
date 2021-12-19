import styled from 'styled-components';

export const PaginationContent = styled.div`
  text-align: center;
  width: 100%;
  a {
    color: gray;

    svg {
      color: gray;
      position: relative;
      top: 4px;
    }
  }
  &a:hover {
    text-decoration: none;
  }
  svg {
    color: #ddd;
  }
`;
export const ButtonNumber = styled.button`
  border: 1px solid #ddd;
  background-color: white;
  width: 25px;
  height: 25px;
`;
