import React from 'react';
import './index.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0
    }
  }


clickHandler = event => {
let data = event.target.getAttribute('data');// номер квадрата по которому кликнули
let currentSquares = this.state.squares;
console.log(currentSquares);

if(currentSquares[data] == null){
currentSquares[data] = (this.state.count % 2 == 0) ? 'X' : 'O';
this.setState({count: this.state.count + 1});
this.setState({squares: currentSquares});
}
else{alert('Клетка уже занята!')}
}

  render() {
    return (
      <div className = "tic-tac-toe">
        <div className = "ttt-grid"onClick={this.clickHandler} data = "0">{this.state.squares[0]}</div>
        <div className = "ttt-grid"onClick={this.clickHandler} data = "1">{this.state.squares[1]}</div>
        <div className = "ttt-grid"onClick={this.clickHandler} data = "2">{this.state.squares[2]}</div>
        <div className = "ttt-grid"onClick={this.clickHandler} data = "3">{this.state.squares[3]}</div>
        <div className = "ttt-grid"onClick={this.clickHandler} data = "4">{this.state.squares[4]}</div>
        <div className = "ttt-grid"onClick={this.clickHandler} data = "5">{this.state.squares[5]}</div>
        <div className = "ttt-grid"onClick={this.clickHandler} data = "6">{this.state.squares[6]}</div>
        <div className = "ttt-grid"onClick={this.clickHandler} data = "7">{this.state.squares[7]}</div>
        <div className = "ttt-grid"onClick={this.clickHandler} data = "8">{this.state.squares[8]}</div>
        
      </div>
    );
  }
}
// function App() {

//   // function redirect_BALDA(){
//   //   <a href="index.html">efwefp</a>
//   // }

//   return (
//     <div className="App">
//       <a href="wordgame.html">efwefp</a>
//     </div>  
//   );
// } 
 
export default App;
