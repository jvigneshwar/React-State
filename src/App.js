import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      a:5,
      b:2
    }
  }
  changeA = () => {
    this.setState({a : this.state.a + 1});
  }
  changeB = () => {
    this.setState({b : this.state.b + 1});
  }
  render(){
    return(
      <>
        <button onClick={this.changeA}>changeA</button><br/>
        <button onClick={this.changeB}>changeB</button>
        <h2>a : {this.state.a}</h2>
        <h2>b : {this.state.b}</h2>
        <h2>(a+b)<sup>3</sup> = a<sup>3</sup> + 3a<sup>3</sup>b + 3ab<sup>3</sup> + b<sup>3</sup></h2>
        <h2>Result : {(Math.pow(this.state.a,3)) + (3 * Math.pow(this.state.a,3) * this.state.b) + (3 * Math.pow(this.state.b,3) * this.state.a) + (Math.pow(this.state.b,3))}</h2>
      </>
    )
  }
}

export default App;