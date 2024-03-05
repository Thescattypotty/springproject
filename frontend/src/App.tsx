import ListEmployee from './Components/ListEmployee';
import AddEmployee from './Components/AddEmployee';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter , Routes , Route } from 'react-router-dom'


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
          </Routes>
          
        <Footer />
      </BrowserRouter>
    </>
  )
}

