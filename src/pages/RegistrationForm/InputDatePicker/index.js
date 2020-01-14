import React, { useRef, useEffect, useState } from 'react';
// import { Container } from './styles';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';

registerLocale('pt', pt);
export default function InputDatePicker({ name }) {
  const ref = useRef();

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [selected, setSelected] = useState(defaultValue);

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


  return (
    <>
      <DatePicker
        name={name}
        selected={selected || new Date()}
        onChange={date => setSelected(date)}
        ref={ref}
        locale="pt"
        dateFormat="dd/MM/yyyy HH:mm:ss"
      />
      {error && <span>{error}</span>}
    </>
  );
}
InputDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
