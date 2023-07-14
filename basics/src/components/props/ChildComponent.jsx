// ChildComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';
const ChildComponent = (props) => {
 return (
   <div>
     <h1>Hello, {props.name}!</h1>
     <p>{props.message}</p>
   </div>
 );
};
ChildComponent.defaultProps = {
  message: 'Welcome to my blog!',
 };
ChildComponent.propTypes = {
 name: PropTypes.string.isRequired,
};
export default ChildComponent;
