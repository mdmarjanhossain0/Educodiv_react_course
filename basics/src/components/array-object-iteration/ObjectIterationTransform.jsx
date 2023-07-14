import React from 'react'

const ObjectIterationTransform = () => {
  const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
  };


return (
    <>
      <h3>Object Iteration Transform to array: </h3>
      <ul>
        {Object.entries(person).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ObjectIterationTransform;
