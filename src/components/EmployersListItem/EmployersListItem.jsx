import './EmployersListItem.css';

const EmployersListItem = (props) => {
  // console.log(props);
  const {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    increase,
    star,
    onToggleStar,
  } = props;
  let classNames = 'list-group-item d-flex justify-content-between';
  if (increase) {
    classNames += ' increase'; //!обязательно должен быть пробел
  }

  if (star) {
    classNames += ' like';
  }
  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleStar}>
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
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployersListItem;
