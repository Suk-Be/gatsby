import React from 'react';
import PropTypes from 'prop-types';

export const Form = props => {
  const [id, children] = [props.id, props.children];
  return <form id={id}>{children}</form>;
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
