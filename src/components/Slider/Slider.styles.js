import styled from 'styled-components';

export const SliderContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Slide = styled.div`
  display: none;
  transition-duration: 1s ease;

  &.active {
    display: block;
  }
  .image {
    width: 1000px;
    max-width: 100%;
    border-radius: 10px;
    padding: 0 10px;
  }
`;
