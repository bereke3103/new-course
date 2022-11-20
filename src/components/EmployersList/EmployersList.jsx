import EmployersListItem from '../EmployersListItem/EmployersListItem';
import './EmployersList.css';
const EmployersList = ({ data }) => {
  const elements = data.map((item) => {
    return <EmployersListItem {...item} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployersList;
