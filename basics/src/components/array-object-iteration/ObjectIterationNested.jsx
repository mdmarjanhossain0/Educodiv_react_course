import React from 'react'

const ObjectIterationNested = () => {
  const person = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA'
    }
  };

return (
    <>
      <h3>Object Iteration Nested: </h3>
      <ul>
        {Object.entries(person.address).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
       ))}
      </ul>
    </>
  );
}

export default ObjectIterationNested;
