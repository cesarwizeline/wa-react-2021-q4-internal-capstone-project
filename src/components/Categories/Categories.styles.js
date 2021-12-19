import styled from 'styled-components';

export const Category = styled.div`
  padding: 15px;
  font-family: italic;
  font-size: 19px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background-color: #111;
  }
  @media (max-width: 768px) {
    width: 91%;
    text-align: center;
    align-items: center;
    margin: 0px;
    margin-bottom: 15px;
  }
`;
export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  background-color: #999;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 90%;
    text-align: center;
    align-items: center;
    margin: 0px;
    margin-bottom: 15px;
    height: 100%;
    top: 42px;
  }
`;
