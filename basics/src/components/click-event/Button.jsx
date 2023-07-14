import React from 'react';
const Button = () => {
 const handleClick = (param) => {
   console.log('Button clicked with:', param);
 };
 return (
   <button onClick={() => handleClick('Custom parameter')}>Click Me</button>
 );
};
export default Button;
