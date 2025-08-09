import React, { useState, useEffect } from 'react'

function AssignmentOne() {
        const [count, setCount] = useState(0);

        useEffect(()=>{
            console.log("counter mounted..");
            
        },[]);

        let increment = ()=>{
            setCount(count + 1);
            
        }
        
      useEffect(()=>{
            console.log("counter updated..");
        },[count]);



return (
    <>
            <h1>Hit Counter :{count}</h1>
            <button
                type="button"
                onClick={increment}
                style={{
                    color: "white",
                    backgroundColor: "blue",
                    border: "1px solid black",
                }}

            >
                +
            </button>
    </>
)
}

export default AssignmentOne