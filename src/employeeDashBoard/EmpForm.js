import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import useAPI from './useAPI';

const EmpForm = ({formValue,isReadOnly,empid}) => {
    const [employee, setEmployee] = useState({
        id:formValue?.id || "",
        name:formValue?.name || "",
        email:formValue?.email || "",
        phone:formValue?.phone || "",
        active:formValue?.active || true
    });
    const [formErrors, setformErrors] = useState({});
    const navigate = useNavigate ();
    const { data, errors, isLoading, get,post,put,del} = useAPI ("http://localhost:8000")

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setEmployee((prev)=>{
            return {
                ...prev,[name]:value
            }
        })
    }
    const validate = () => {
        let errors = {};
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!employee.name) errors.name = 'Enter valid Username';
        else if (employee.name.length < 3 || employee.name.length > 30) errors.name = 'Username should be min 3 & max 30 characters';
        if (!employee.email || !isValidEmail.test(employee.email)) errors.email = 'Enter Valid Email';
        if (!employee.phone || employee.phone.length < 10 || employee.phone.length > 15) errors.phone = 'Phone number should be min 10 & max 15';
        return errors;
    }
    const postEmployeeList = async () => {
        try{
            const response= await post("/employee",employee,{headers:{"content-type":"application/json"}})
            if (Object.keys(response).length > 0){
                navigate("/")
            }
        }
        catch (any) {
            console.error(any);
        }

    }
    const putEmployeeList = async () => {
        try{
            const response= await put("/employe/"+empid,employee,{headers:{"content-type":"application/json"}})
            if (Object.keys(response).length > 0){
                get("/employee")
                navigate("/")
            }
        }
        catch (any) {
            console.error("any");
        }
    }


    const handlesubmit = (event) => {
        event.preventDefault();
        const validationResult = validate();
        setformErrors(validationResult);
        if (Object.keys(validationResult).length === 0) {
            (empid)? putEmployeeList () : postEmployeeList();
        }
    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor='id'>ID</label>
                                            <input name='id' id="id" value={employee.id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor='name'>Name</label>
                                            <input type='text' disabled={isReadOnly} required name='name' id="name" value={employee.name} onChange={handleOnChange} className="form-control"></input>
                                            {formErrors.name && <small className="text-danger">Enter the valid name</small>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor='email'>Email</label>
                                            <input type='email'  disabled={isReadOnly} name='email' id="email" value={employee.email} onChange={handleOnChange} className="form-control"></input>
                                            {formErrors.email && <small className="text-danger">Enter the valid email</small>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor='phone'>Phone</label>
                                            <input type='number' disabled={isReadOnly} name='phone' id="phone" value={employee.phone} onChange={handleOnChange} className="form-control"></input>
                                            {formErrors.phone && <small className="text-danger">Enter the valid phone number</small>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={employee.active}  disabled={isReadOnly} name='active' id="active" onChange={handleOnChange} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label" htmlFor='active'>Is Active</label>

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" disabled={isReadOnly} type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}
export default EmpForm