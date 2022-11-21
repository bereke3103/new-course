import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      counter: this.props.counter,
    };
  }

  plus = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  minus = () => {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  };

  random = () => {
    this.setState({
      counter: (Math.random() * 1000).toFixed(0),
    });
  };

  reset = () => {
    this.setState({
      counter: this.props.counter,
    });
  };
  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  render() {
    const { counter } = this.state;
    return (
      <div className="app">
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={this.plus}>INC</button>
          <button onClick={this.minus}>DEC</button>
          <button onClick={this.random}>RND</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    );
  }
}

export default App;
