import React, {useEffect, useState} from 'react';
import { listEmployee } from '../../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';
export default function ListEmployee() {
    
    const [employees, setEmployees] =  useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listEmployee().then(( response ) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error)
        })
    },[]
    )
    function addNewEmployee()
    {
        navigator('/add-employee')
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
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <th scope="row">{employee.id}</th>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

