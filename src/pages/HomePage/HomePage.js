import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import Slider from '../../components/Slider';
import { ButtonPrimary } from './HomePage.style';
const HomePage = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <ButtonPrimary>
        <Link to="/products"> View all products</Link>
      </ButtonPrimary>
    </>
  );
};
export default HomePage;
