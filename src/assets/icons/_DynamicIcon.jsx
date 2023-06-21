import React from 'react';

const DynamicIcon = (props) => {
  const { icon, className } = props;

  console.log(props);
  

  return React.cloneElement(icon, {
    "className": className,
  });
}

export default DynamicIcon;
