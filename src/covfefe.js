import React from 'react'
import PropTypes from 'prop-types'
import covfefe from 'covfefe'


export default function Covfefe ({children, ...rest}) {
  if (typeof children !== 'string') {
    return children;
  }

  return (
    <span {...rest}>
      {covfefe(children)}
    </span>
  );
}
