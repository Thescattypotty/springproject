import ListEmployee from './Components/ListEmployee';
import AddEmployee from './Components/AddEmployee';
import ListProduct from './Components/ListProducts';
import AddProduct from './Components/AddProduct';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* route  : */}
          <Route path='/' element={<ListEmployee />}></Route>
          <Route path='/employees' element={<ListEmployee />}></Route>
          <Route path='/add-employee' element={<AddEmployee />}></Route>
          <Route path='/edit-employee/:id' element={<AddEmployee />}></Route>
          <Route path='/products' element={< ListProduct />}></Route>
          <Route path='add-product' element={<AddProduct />}></Route>
          <Route path='edit-product/:id' element={<AddProduct />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

