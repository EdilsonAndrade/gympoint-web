import React from 'react';
import PropTypes from 'prop-types';
import ButtonContent from './styles';

export default function Button({ handleClick, children, buttonType }) {
  return (
    <ButtonContent type={buttonType} onClick={handleClick}>
      {children}
    </ButtonContent>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.none),
    PropTypes.node,
  ]).isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonType: PropTypes.string.isRequired,
};
