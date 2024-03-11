import React, { useEffect, useState } from 'react';
import { deleteProduct, listProduct } from '../../Services/ProductService';
import { useNavigate } from 'react-router-dom';

export default function ListProducts() {

    const [products, setProducts] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        GetAllProducts()
    }, []
    )
    function GetAllProducts() {
        listProduct().then((response) => {
            setProducts(response.data);
        }).catch(error => {
            console.error(error)
        })
    }
    function addNewproduct() {
        navigator('/add-product')
    }
    function updateProduct(id) {
        navigator(`/edit-product/${id}`)
    }
    function removeProduct(id) {
        console.log(id)
        deleteProduct(id).then((response) => {
            GetAllProducts()
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="container mt-4">
            <h2>List of Products</h2>
            <button className="btn btn-primary mb-2" onClick={addNewproduct}>Add Product</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Stock Quantity</th>
                        <th scope='col'>Price</th>
                        <th scope='col'> SKU </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.ProductName}</td>
                                <td>{product.Description}</td>
                                <td>{product.StockQuantity}</td>
                                <td>{product.price}</td>
                                <td>{product.sku}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateProduct(product.id)}>Update</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className='btn btn-danger' onClick={() => removeProduct(product.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

