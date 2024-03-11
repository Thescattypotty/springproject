import axios from "axios";

const Rest_API_BASE_URL = "http://localhost:8080/api/products";


export const listProduct = () => {
    return axios.get(Rest_API_BASE_URL);
}

export const createProduct = (product: any) => axios.post(Rest_API_BASE_URL, product)

export const getProduct = (productId: any) => axios.get(Rest_API_BASE_URL + '/' + productId)

export const updateProduct = (productId: any, product: any) => axios.put(Rest_API_BASE_URL + '/' + productId, product)

export const deleteProduct = (productId: any) => axios.delete(Rest_API_BASE_URL + '/' + productId)