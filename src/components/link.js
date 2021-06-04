import React from 'react';
import PropTypes from 'prop-types';
import { Anchor } from './_htmlComponents/anchor';
import { navigate } from 'gatsby';

const Link = ({ to, linkStyle, ...rest }) => (
  <Anchor
    href={to}
    onClick={e => {
      navigate(to);
      e.preventDefault();
    }}
    {...rest}
  />
);

Link.propTypes = {
  to: PropTypes.string,
};
export default Link;
