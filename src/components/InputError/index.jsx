import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const InputError = ({ message }) => (
  <div className={styles.inputError}>
    {message}
  </div>
);

InputError.propTypes = {
  message: PropTypes.string
};

export default InputError;
