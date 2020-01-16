import React, { useRef, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

export default function InputNumberFormatForm({ name, label, ...rest }) {
  const ref = useRef();
  const { fieldName, registerField, error, defaultValue } = useField(name);
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      clearValue: maskRef => {
        maskRef.clear();
      },
    });
  },[ref.current, fieldName]); // eslint-disable-line

  const {
    type,
    thousandSeparator,
    decimalSeparator,
    decimalScale,
    fixedDecimalScale,
    prefix,
  } = rest;
  const props = {
    type,
    thousandSeparator,
    decimalSeparator,
    decimalScale,
    fixedDecimalScale,
    prefix,
    value,
  };
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <NumberFormat {...props} ref={ref} />
      {error && <span>{error}</span>}
    </>
  );
}
InputNumberFormatForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
