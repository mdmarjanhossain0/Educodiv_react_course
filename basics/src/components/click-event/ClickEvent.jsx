import React from 'react'

const ClickEvent = () => {

  const handleClick=(e)=>{
    console.log("button clicked.");
  }

  return (
    <>
      <button onClick={handleClick}>Click here</button>
    </>
  )
}

export default ClickEvent;
