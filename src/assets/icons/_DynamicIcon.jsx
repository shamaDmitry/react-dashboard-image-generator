import React from 'react';

const DynamicIcon = (props) => {
  const { icon, className } = props;

  return React.cloneElement(icon, {
    "className": className,
  });
}

export default DynamicIcon;
