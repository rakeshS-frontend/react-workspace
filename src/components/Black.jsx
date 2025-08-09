import { useEffect, useState } from 'react';
// function Black() {
//     const [model, setModel] = useState("Mustang");
//     const [year, setYear] = useState(2023);
//     const [color, setColor] = useState("Black");
//     const [isElectric, setIsElectric] = useState(false);
//     const [brand] = useState("Ford");
//     return (
//     <>
//     <div>
//     <h1>My car is a {brand}. Details:</h1>
//     <h2>Model: {model}</h2>
//     <h2>Year: {year}</h2>   
//     <h2>Color: {color}</h2>
//     <h2>Electric: {isElectric ? "Yes" : "No"}</h2>
//     </div>
//     </>
//     );




// }

function Black2() {
    const [car, setCar] = useState(
        {
        model: "Mustang",
        year: 2023,
        color: "Black",
        isElectric: false,
        brand: "Ford"
       }
    );

    let changeColor = () => {
        return car.color === "Black" ? "white" : "Black";
    };
    
    let updateYearOnClick = () =>{
        setCar(pstate => ({ ...pstate, year: pstate.year + 1,color: changeColor() }));
    }
    useEffect(() => {
        console.log("Black component car Year changed to:", car.year);
        console.log("Black component car color changed to:", car.color);

    },[car.year, car.color]);

        useEffect(() => {
        console.log("Black component Mounted:");
    },[]);

    return (
        <>
            <div>
                <h1>My car is a {car.brand}. Details:</h1>
                <h2>Model: {car.model}</h2>
                <h2>Year: {car.year}</h2>
                <h2>Color: {car.color}</h2>
                <h2>Electric: {car.isElectric ? "Yes" : "No"}</h2>
                <button type="button" 
                onClick={updateYearOnClick}>Show Me!!</button>
   
            </div>
        </>
    );
}



export default Black2;