import React from 'react'

export const ArrayIterationMap = () => {
  const numbers = [1, 2, 3, 4, 5];
	return (
    <>
			<h3>Array Iteration Map: </h3>
			<ul>
				{numbers.map((number) => (
					<li key={number}>{number}</li>
				))}
			</ul>
		</>
	);
}
