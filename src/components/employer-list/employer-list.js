import './employers-list.css'
import EmployersListItem from "../employers-list-item/employers-list-item"

const EmployersList = ({data, onDelete})=>{
    
    return(
        <ul className="app-list list-group">
            {
                data.map(item=>{
                    const {id, ...itemProps} = item;
                    return <EmployersListItem key={id} {...itemProps} onDelete={()=>onDelete(id)}></EmployersListItem>
                })
            }
        </ul>
    )
}


export default EmployersList 