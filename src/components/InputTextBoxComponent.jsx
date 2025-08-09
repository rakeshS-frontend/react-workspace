import React from 'react'

  //Approach 2: showing event using state

function InputTextBoxComponent() {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <>
        <h2>InputTextBoxComponent</h2>
     
        <input type="text" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}} placeholder="Enter text here" />
        <br /><br />
        <h3>Current Input Value: {inputValue}</h3>
        <button type="reset" onClick={()=> setInputValue('')}>Reset</button>
        
    </>
  )
}

//Approach 1: showing event in console log 

// function InputTextBoxComponent() {
//   return (
//     <>
//         <h2>InputTextBoxComponent</h2>
     
//         <input type="text" onChange={(event)=>{console.log(event.target.value)}} placeholder="Enter text here" />
//         <br /><br />

//     </>
//   )
// }




export default InputTextBoxComponent