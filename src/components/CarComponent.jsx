import React from 'react';

class CarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
   
  }
   changeColor = ()=>{
        this.setState({color: "Kala"});
    }
  render() {
    return (
      <div>
        <h1>My Car brand is {this.state.brand}.</h1>
         <p>
          It is in {this.state.color} color, model is
          {this.state.model} and it was manufactured
          from {this.state.year}.Finally, the price of this car is {this.props.price}.
        </p>
        <button type='button' onClick={this.changeColor}>Change Color</button>
      </div> 
    );
  }
}

export { CarComponent };