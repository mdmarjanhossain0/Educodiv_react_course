import React from 'react'

const ObjectIteration = () => {
  const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
};


return (
  <>
    <h3>Object Iteration: </h3>
    <ul>
      {Object.keys(person).map((property) => (
        <li key={property}>
          <strong>{property}:</strong> {person[property]}
        </li>
      ))}
    </ul>
  </>
);
}

export default ObjectIteration
