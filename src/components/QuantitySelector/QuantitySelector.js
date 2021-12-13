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

export default QuantitySelector;
