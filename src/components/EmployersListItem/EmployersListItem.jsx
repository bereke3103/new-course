import { Component } from 'react';
import './EmployersListItem.css';

class EmployersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      star: false,
    };
  }

  showStar = () => {
    this.setState(({ star }) => ({
      star: !star,
    }));
  };

  yellowBtn = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };
  render() {
    const { name, salary } = this.props;
    const { increase, star } = this.state;
    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
      classNames += ' increase'; //!обязательно должен быть пробел
    }

    if (star) {
      classNames += ' like';
    }
    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.showStar}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />

        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={this.yellowBtn}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployersListItem;
