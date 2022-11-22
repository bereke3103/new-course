import { Component } from 'react';
import EmployersListItem from '../EmployersListItem/EmployersListItem';
import './EmployersList.css';
class EmployersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, onDelete, onToggleIncrease, onToggleStar } = this.props;
    const elements = data.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <EmployersListItem
          key={id}
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleIncrease={() => onToggleIncrease(id)}
          onToggleStar={() => onToggleStar(id)}
        />
      );
    });

    return <ul className="app-list list-group">{elements}</ul>;
  }
}

export default EmployersList;
