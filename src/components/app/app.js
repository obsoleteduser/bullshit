import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employer-list/employer-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'
import { Component } from 'react'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: true, id: 1},
                {name: 'Alex', salary: 3000, increase: false, id: 2},
                {name: 'Carl W', salary: 5000, increase: false, id: 3},
                {name: "Paul", salary: 0, increase: false, id: 4}
            ]
        }
    }


    deleteItem = (id) =>{
        this.setState(({data})=> {
            // const index = data.findIndex(elem => elem.id === id)
            // const before = data.slice(0, index)
            // const after = data.slice(index+1)
            // const updatedData = [...before, ...after]
            
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render(){
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                </div>
                <EmployersList onDelete={this.deleteItem} data={this.state.data}/>
                <EmployersAddForm/>
            </div>
        )
    }


}

export default App