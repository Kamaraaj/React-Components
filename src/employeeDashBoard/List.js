import React from 'react';
import{Link} from 'react-router-dom';
const List = ({ employee,handleRemoveEmployee }) => {
    return (<>
        <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>
                <Link to={`employee/edit/${employee.id}`} className="btn btn-success">Edit</Link>
                <button type='button' onClick={()=>handleRemoveEmployee(employee.id)} className="btn btn-danger">Remove</button>
                <Link to={`employee/details/${employee.id}`} className="btn btn-primary">Details</Link>
            </td>
        </tr>
    </>)
}
export default List