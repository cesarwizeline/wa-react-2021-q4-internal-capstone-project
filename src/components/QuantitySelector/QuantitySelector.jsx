import React from 'react';
import PropTypes from 'prop-types';
import {
  QuantityButton,
  QuantityInput,
  QtySelectorContent,
} from './QuantitySelector.styles';
const QuantitySelector = ({ increaseHandler, reduceHandler, quantity }) => {
  return (
    <>
      <QtySelectorContent>
        <QuantityButton
          onClick={() => {
            reduceHandler();
          }}
        >
          -
        </QuantityButton>
        <QuantityInput readOnly value={quantity} />
        <QuantityButton
          onClick={() => {
            increaseHandler();
          }}
        >
          +
        </QuantityButton>
      </QtySelectorContent>
    </>
  );
};
QuantitySelector.propTypes = {
  increaseHandler: PropTypes.func.isRequired,
  reduceHandler: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default QuantitySelector;
