import React from 'react';
import PropTypes from 'prop-types';
import { InputTextContent, InputTextAreaContent } from './InputText.styles';

const InputText = ({ title, type }) => {
  return (
    <div>
      <span> {title} </span>
      {type === 'textarea' ? (
        <InputTextAreaContent></InputTextAreaContent>
      ) : (
        <InputTextContent type={type} />
      )}
    </div>
  );
};

InputText.defaultProps = {
  type: 'text',
};

InputText.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

export default InputText;
