import './employers-list.css'
import EmployersListItem from "../employers-list-item/employers-list-item"

const EmployersList = ({data})=>{
    return(
        <ul className="app-list list-group">
            {
                data.map(item=>{
                    return <EmployersListItem {...item}></EmployersListItem>
                })
            }
        </ul>
    )
}


export default EmployersList 