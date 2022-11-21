import { Component } from 'react';
import './App.css';

//!ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ
// function WhoAmI({ name, surname, link }) {
//   // console.log(props);
//   return (
//     <div>
//       <h1>
//         My name is {name()} , surname - {surname}
//       </h1>
//       <a href={link} target="_blank">
//         My profile
//       </a>
//     </div>
//   );
// }

//!КЛАССОВЫЙ КОМПОНЕНТ
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      years: 27,
      text: 'Увеличить год',
      inputText: '',
    };
  }

  onChangeInput = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };
  render() {
    const { name, surname, link } = this.props;
    const { years, inputText } = this.state;
    return (
      <div>
        <h1>
          My name is {name} , surname - {surname}
        </h1>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h2>His years is {years}</h2>
        <a href={link}>My Profile</a>

        <div>My positin is - {inputText} </div>
        <input type="text" onChange={this.onChangeInput} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="Bereke" surname="Sakan" link="https://www.youtube.com/" />
      <WhoAmI name="Alex" surname="Smith" link="https://ru-ru.facebook.com/" />
    </div>
  );
}

export default App;
