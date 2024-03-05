import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../../Services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';


export default function AddEmployee() {




    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const { id } = useParams();
    const [] = useState({
        firstName: '',
        lastName: ''
    })

    const navigator = useNavigate();

    function SaveOrUpdateEmployee(e) {
        e.preventDefault()
        const employee = { firstName, lastName }
        if (validateForm()) {
            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error => {
                    console.log(error)
                })
            }
            else {
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error => {
                    console.log(error)
                })
            }


        }

    }
    const [errors, setErrors] = useState('')

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
            }).catch(error => {
                console.log(error);
            })
        }
    }, [id])

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
    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Add Employee</h2>
        }
        else {
            return <h2 className='text-center'>Update Employee</h2>
        }
    }
    return (
        <>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {pageTitle()}
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Employee First name'
                                        name='firstName'
                                        value={firstName}
                                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Employee Last name'
                                        name='lastName'
                                        value={lastName}
                                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                                </div>
                                <button className='btn btn-success' onClick={SaveOrUpdateEmployee}>Save Employee</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

