import './App.css';
import './components/SearchPanel/SearchPanel.css';
import AppInfo from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from './components/AppFilter/AppFilter';
import './components/AppFilter/AppFilter.css';
import EmployersList from './components/EmployersList/EmployersList';
import EmployersAddForm from './components/EmployersAddForm/EmployersAddForm';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Bereke', salary: 1000, increase: false, star: false, id: 1 },
        { name: 'Alex', salary: 5000, increase: false, star: false, id: 2 },
        { name: 'Mike', salary: 2000, increase: false, star: false, id: 3 },
      ],
      term: '',
    };

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      // !1 вариант
      // const index = data.findIndex((item) => item.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
      // return {
      //   data: newArr,
      // };
      // !2 вариант
      data: data.filter((item) => item.id !== id),
    }));
  };

  addPerson = (name, salary) => {
    const newPerson = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newPerson];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    // !1 ВАРИАНТ
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));

    // !2 ВАРИАНТ
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);
    //   const old = data[index];

    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [
    //     ...data.slice(0, index),
    //     newItem,
    //     ...data.slice(index + 1),
    //   ];

    //   return {
    //     data: newArr,
    //   };
    // });
  };

  onToggleStar = (id) => {
    // !1ый вариант
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, star: !item.star };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  render() {
    const employers = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const { data, term } = this.state;
    const visibleData = this.searchEmp(data, term);

    return (
      <div className="App">
        <AppInfo employers={employers} increased={increased} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList
          onDelete={this.deleteItem}
          data={visibleData}
          onToggleIncrease={this.onToggleIncrease}
          onToggleStar={this.onToggleStar}
        />
        <EmployersAddForm addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
