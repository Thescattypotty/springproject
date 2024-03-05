import React, {useEffect, useState} from 'react'
import { listEmployee } from '../../Services/EmployeeService';

export default function ListEmployee() {
    
    const [employees, setEmployees] =  useState([])

    useEffect(() => {
        listEmployee().then(( response ) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error)
        })
    },[]
    )

    return (
        <div className="container mt-4">
            <h2>List of Employees</h2>
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

