import { Component } from 'react';
import EmployersListItem from '../EmployersListItem/EmployersListItem';
import './EmployersList.css';
class EmployersList extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    const { data, onDelete } = this.props;
    const elements = data.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <EmployersListItem
          key={id}
          {...itemProps}
          onDelete={() => onDelete(id)}
        />
      );
    });

    return <ul className="app-list list-group">{elements}</ul>;
  }
}

export default EmployersList;
