import './App.css';
import './components/SearchPanel/SearchPanel.css';
import AppInfo from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from './components/AppFilter/AppFilter';
import './components/AppFilter/AppFilter.css';
import EmployersList from './components/EmployersList/EmployersList';
import EmployersAddForm from './components/EmployersAddForm/EmployersAddForm';

function App() {
  const data = [
    { name: 'Bereke', salary: 1000, increase: true, id: 1 },
    { name: 'Alex', salary: 5000, increase: false, id: 2 },
    { name: 'Mike', salary: 2000, increase: false, id: 3 },
  ];
  return (
    <div className="App">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} />
      <EmployersAddForm />
    </div>
  );
}

export default App;
