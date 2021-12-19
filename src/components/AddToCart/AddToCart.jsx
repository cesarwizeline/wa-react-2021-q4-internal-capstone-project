import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AddToCartButton } from './AddToCart.styles.js';
import useAddToCart from '../../utils/hooks/useAddToCart';
import CartContext from '../../context/CartContext';
import QuantitySelector from '../QuantitySelector';
export const AddToCart = ({ product, maxQuantity = 1 }) => {
  const { addProduct } = useContext(CartContext);

  const [reduceHandler, increaseHandler, quantity] = useAddToCart(
    1,
    maxQuantity
  );

  return (
    <>
      <QuantitySelector
        reduceHandler={() => reduceHandler()}
        increaseHandler={() => increaseHandler()}
        quantity={quantity}
      />
      <AddToCartButton onClick={() => addProduct(product, quantity)}>
        Add to Cart
      </AddToCartButton>
    </>
  );
};
AddToCart.propTypes = {
  product: PropTypes.object,
  maxQuantity: PropTypes.number,
};
export default AddToCart;
