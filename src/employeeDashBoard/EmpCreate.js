import React, { useState,useEffect } from 'react';
import EmpForm from './EmpForm';

const formValue = {
    id:"",
    name:"",
    email:"",
    phone:"",
    active:true
}
const EmpCreate = () => {
   
    return (
        <div>
            <EmpForm />
        </div>
    )
}
export default EmpCreate