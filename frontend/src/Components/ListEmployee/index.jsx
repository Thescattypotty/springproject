import React, {useEffect, useState} from 'react';
import { deleteEmployee, listEmployee } from '../../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export default function ListEmployee() {
    
    const [employees, setEmployees] =  useState([])

    const navigator = useNavigate();

    useEffect(() => {
        GetAllEmployees()
    },[]
    )
    function GetAllEmployees()
    {
        listEmployee().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error)
        })
    }
    function addNewEmployee()
    {
        navigator('/add-employee')
    }
    function updateEmployee(id)
    {
        navigator(`/edit-employee/${id}`)
    }
    function removeEmployee(id)
    {
        console.log(id)
        deleteEmployee(id).then((response) => {
            GetAllEmployees()
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="container mt-4">
            <h2>List of Employees</h2>
            <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <th scope="row">{employee.id}</th>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id) }>Delete</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

