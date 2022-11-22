import { Component } from 'react';
import './AppInfo.css';

class AppInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { employers, increased } = this.props;
    return (
      <div className="app-info">
        <h1>Учет сотрудников в нашей компании</h1>
        <h2>Общее число сотрудников: {employers}</h2>
        <h2>Премии получат: {increased}</h2>
      </div>
    );
  }
}

export default AppInfo;
