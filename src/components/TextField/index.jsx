import React from 'react';
import { Form, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InputError from '../InputError';

const TextField = ({ label, placeholder, type = 'text', error, loading, touched, onBlur, onChange }) => (
  <>
    <Form.Input
      label={label}
      placeholder={placeholder}
      type={type}
      error={Boolean(error)}
      onBlur={onBlur}
      onChange={onChange}
      disabled={loading}
      icon={touched && (
        <Icon
          name={error ? 'exclamation circle' : 'check circle'}
          color={error ? 'red' : 'green'}
        />
      )}
    />
    {error ? <InputError message={error} /> : null}
  </>
);

export default TextField;
