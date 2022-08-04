import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ mensaje }) => (
    <p className="alert alert-danger error">{mensaje}</p>
);
export default Error;