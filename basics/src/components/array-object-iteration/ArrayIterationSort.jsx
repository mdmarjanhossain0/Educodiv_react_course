import React from 'react'

export const ArrayIterationSort = () => {
  const numbers = [3, 2, 7, 8, 5];
	return (
    <>
      <h3>Array Iteration Sort: </h3>
      <ul>
        {numbers.sort((a, b) => a - b).map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </>
	);
}
