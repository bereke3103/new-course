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
        { name: 'Bereke', salary: 1000, increase: true, id: 1 },
        { name: 'Alex', salary: 5000, increase: false, id: 2 },
        { name: 'Mike', salary: 2000, increase: false, id: 3 },
      ],
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

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList onDelete={this.deleteItem} data={data} />
        <EmployersAddForm addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
