import React from 'react';
import PropTypes from 'prop-types';
import { ContentContainer } from './Content.styles';
export default function Content({ children }) {
  return <ContentContainer>{children}</ContentContainer>;
}
Content.propTypes = {
  children: PropTypes.any,
};
