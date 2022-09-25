import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employer-list/employer-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'


function App(){


    const data = [
        {name: 'John C.', salary: 800, increase: true},
        {name: 'Alex', salary: 3000, increase: false},
        {name: 'Carl W', salary: 5000, increase: false},
        {name: "Peysər", salary: 0, increase: false}
    ]

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    )
}

export default App