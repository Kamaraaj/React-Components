import React,{useEffect} from 'react'
import List from './List'
import {Link} from 'react-router-dom'
import useAPI from './useAPI'
const EmpList = ()=> {
    const { data, errors, isLoading, get,del} = useAPI ("http://localhost:8000")
    useEffect(()=>{
        get("/employee")
    },[])
   
    const handleRemoveEmployee =async (id)=>{
        try{
            del("/employee/"+id,{headers:{"content-type":"application/json"}})       
        }
        catch(any){
            console.error(any);
        }
    }

    if (isLoading) return <div>Loading...</div>;
    if (errors) return <div>Error: {errors}</div>;

return(
    <div className="container">
        <div className="card">
            <div className="card-title">
                <h2>Emploees</h2>
            </div>
            <div className="card-body">
                <div className='divbtn'>
                    <Link to="employee/create" className='btn btn-success'>Add New (+)</Link>
                </div>
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (data?.length > 0)? (data.map((employee)=><List key={employee.id} employee={employee} handleRemoveEmployee = {handleRemoveEmployee} />))
                        : (<tr style={{height:'50vh'}}><td colSpan="5">No data found</td></tr>)
                        }
                    </tbody>
                </table>
            </div>
            </div>         
    </div>
)
}
export default EmpList;