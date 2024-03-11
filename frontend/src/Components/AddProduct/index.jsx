import React, { useEffect, useState } from 'react';
import { createProduct, getProduct, deleteProduct } from '../../Services/ProductService';
import { useNavigate, useParams } from 'react-router-dom';
import QRCode from "react-qr-code";
import ReactDOM from "react-dom";


export default function AddProduct() {




    const [ProductName, setProductName] = useState('')
    const [Description, setDescription] = useState('')
    const [StockQuantity, setStockQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [sku, setSku] = useState('')

    const { id } = useParams();
    const [] = useState({
        ProductName: '',
        Description: '',
        StockQuantity: '',
        price: ''
    })

    const navigator = useNavigate();

    function SaveOrUpdateProduct(e) {
        e.preventDefault()
        const product = { ProductName, Description, StockQuantity, price }
        if (validateForm()) {
            if (id) {
                updateProduct(id, product).then((response) => {
                    console.log(response.data)
                    navigator('/products')
                }).catch(error => {
                    console.log(error)
                })
            }
            else {
                createProduct(product).then((response) => {
                    console.log(response.data);
                    navigator('/products')
                }).catch(error => {
                    console.log(error)
                })
            }


        }

    }
    const [errors, setErrors] = useState('')

    useEffect(() => {
        if (id) {
            getProduct(id).then((response) => {
                setProductName(response.data.ProductName)
                setDescription(response.data.Description)
                setStockQuantity(response.data.StockQuantity)
                setPrice(response.data.price)
                setSku(response.data.sku)
            }).catch(error => {
                console.log(error);
            })
        }
    }, [id])

    function validateForm() {
        let valid = true

        const errorsCopy = { ...errors }

        if (ProductName.trim()) {
            errorsCopy.ProductName = ''
        }
        else {
            errorsCopy.ProductName = 'Product name is required'
            valid = false
        }

        if (Description.trim()) {
            errorsCopy.Description = ''
        }
        else {
            errorsCopy.Description = 'Description is required'
            valid = false
        }

        if (StockQuantity.trim()) {
            errorsCopy.StockQuantity = ''
        }
        else {
            errorsCopy.StockQuantity = 'StockQuantity is required'
            valid = false
        }

        if (price.trim()) {
            errorsCopy.price = ''
        }
        else {
            errorsCopy.price = 'price is required'
            valid = false
        }

        setErrors(errorsCopy)

        return valid
    }
    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Add Product</h2>
        }
        else {
            return <h2 className='text-center'>Update Product</h2>
        }
    }
    function SKUQRCode()
    {
        if(id)
        {
            return(
                <div>
                    <QRCode 
                    value={sku}
                    />
                </div>
            )

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
                                    <label className='form-label'>Product Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Product name :'
                                        name='ProductName'
                                        value={ProductName}
                                        className={`form-control ${errors.ProductName ? 'is-invalid' : ''}`}
                                        onChange={(e) => setProductName(e.target.value)}
                                    />
                                    {errors.ProductName && <div className='invalid-feedback'>{errors.ProductName}</div>}
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Description</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Product Description : '
                                        name='Description'
                                        value={Description}
                                        className={`form-control ${errors.Description ? 'is-invalid' : ''}`}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    {errors.Description && <div className='invalid-feedback'>{errors.Description}</div>}
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>StockQuantity</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Product StockQuantity : '
                                        name='StockQuantity'
                                        value={StockQuantity}
                                        className={`form-control ${errors.StockQuantity ? 'is-invalid' : ''}`}
                                        onChange={(e) => setStockQuantity(e.target.value)}
                                    />
                                    {errors.StockQuantity && <div className='invalid-feedback'>{errors.StockQuantity}</div>}
                                </div>


                                <div className='form-group mb-2'>
                                    <label className='form-label'>Price</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Product price : '
                                        name='price'
                                        value={price}
                                        className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    {errors.price && <div className='invalid-feedback'>{errors.price}</div>}
                                </div>
                                <button className='btn btn-success' onClick={SaveOrUpdateProduct}>Save Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {SKUQRCode()}
        </>
    )
}

