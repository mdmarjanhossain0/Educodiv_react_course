// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';
const ParentComponent = () => {
 const name = 'John';
 return (
   <div>
     <ChildComponent name={name} />
   </div>
 );
};
export default ParentComponent;
