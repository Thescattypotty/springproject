import React, { useState } from 'react';
import { createEmployee } from '../../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';


export default function AddEmployee() {

    const navigator = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [] = useState({
        firstName: '',
        lastName: ''
    })

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    function handleLastName(e) {
        setLastName(e.target.value);
    }
    function saveEmployee(e) {
        e.preventDefault()
        if (validateForm()) {
            const employee = { firstName, lastName }
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees')
            })
        }

    }
    const [errors, setErrors] = useState('')

    function validateForm() {
        let valid = true

        const errorsCopy = { ...errors }

        if (firstName.trim()) {
            errorsCopy.firstName = ''
        }
        else {
            errorsCopy.firstName = 'First name is required'
            valid = false
        }

        if (lastName.trim()) {
            errorsCopy.lastName = ''
        }
        else {
            errorsCopy.lastName = 'Last name is required'
            valid = false
        }

        setErrors(errorsCopy)

        return valid
    }
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee First name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${ errors.firstName ? 'is-invalid': '' }` }
                                    onChange={handleFirstName}
                                />
                                { errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Last name'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={handleLastName}
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveEmployee}>Save Employee</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

