import axios from "axios";

const Rest_API_BASE_URL = "http://localhost:8080/api/employee";


export const listEmployee = () => {
    return axios.get(Rest_API_BASE_URL);
}

export const createEmployee = (employee: any) => axios.post(Rest_API_BASE_URL, employee)

export const getEmployee = (employeeid: any) => axios.get(Rest_API_BASE_URL+'/'+employeeid)

export const updateEmployee = (employeeId : any , employee: any) => axios.put(Rest_API_BASE_URL+'/'+employeeId, employee)

export const deleteEmployee = (employeeId: any) => axios.delete(Rest_API_BASE_URL + '/' + employeeId)