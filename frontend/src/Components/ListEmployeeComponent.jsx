import React from 'react'


export default function ListEmployeeComponent() {
    const data = [
        {
            "id": 3,
            "firstName": "Test",
            "lastName": "test"
        }
    ]

    return (
        <div className="container mt-4">
            <h2>List of Employees</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(employee =>
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

