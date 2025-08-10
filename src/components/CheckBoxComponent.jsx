import React, { useState } from 'react'

function CheckBoxComponent() {
    const [hobby,setHobby] = useState([]);


    function effects(event){
       console.log(event.target.value,event.target.checked);
        if(event.target.checked)
            setHobby([...hobby,event.target.value])
        else
            setHobby(hobby.filter(item => item != event.target.value));
    }

    return (
        <>
            <h2>CheckBoxComponent for Hobbies</h2>

            <input type="checkbox" onChange={effects} id="cooking" value='cooking' />
            <label htmlFor="cooking">Cooking</label> <br />
 
            <input type="checkbox" onChange={effects} id="sleeping" value='sleeping' />
            <label htmlFor="sleeping">Sleeping</label> <br />
            
            <h1>{hobby.join('  ')}</h1>
        </>
    )
}

export default CheckBoxComponent