import React from 'react';

const ArrayIterationFilter = () => {
    const fruits = ['Apple', 'Banana', 'Orange'];

  return (
    <>
      <h3>Array iteration filter: </h3>
      <ul>
        {fruits.filter((fruit) => fruit !== 'Banana').map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default ArrayIterationFilter;
