import React from 'react';
import './App.css';
import EmpList from "./employeeDashBoard/EmpList"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmpCreate from './employeeDashBoard/EmpCreate';
import EmpEdit from './employeeDashBoard/EmpEdit';
import EmpDetails from './employeeDashBoard/EmpDetails';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpList />} />
        <Route path='employee'>
        <Route path='create' element={<EmpCreate />} />
        <Route path='edit/:empid' element={<EmpEdit />} />
        <Route path='details/:empid' element={<EmpDetails />} />
        </Route>
      </Routes>
      </BrowserRouter>
         
    </React.Fragment>

  );
}

export default App;
