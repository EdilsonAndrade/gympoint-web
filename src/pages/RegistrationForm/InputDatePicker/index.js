import React, { useRef, useEffect } from 'react';
// import { Container } from './styles';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';

registerLocale('pt', pt);
export default function InputDatePicker({ name, ...rest }) {
  const ref = useRef();

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  },[name, fieldName]); // eslint-disable-line

  const props = {
    ...rest,
  };

  return (
    <>
      <DatePicker
        name={name}
        ref={ref}
        locale="pt"
        dateFormat="dd/MM/yyyy HH:mm:ss"
        {...props}
      />
      {error && <span>{error}</span>}
    </>
  );
}
InputDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
