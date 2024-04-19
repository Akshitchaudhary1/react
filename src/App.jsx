import './App.css'
import {Route,Routes } from 'react-router-dom'
import Languages from './components/Languages'
import Navbar from './Navbar'
import About from './about'
import HomePage from './components/HomePage'
import Card from './components/Card'
import Product from './components/Product'
import Product1 from './components/Product1'
import Product2 from './components/Product2'
import Product3 from './components/Product3'
import Student from './components/Student'

function App() {
  
  
  return (
 <> 
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Languages' element={<Languages/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Card' element={<Card/>}/>
      <Route path='/Product' element={<Product/>}>
      <Route path='Product1' element={<Product1/>}/>
      <Route path='Product2' element={<Product2/>}/>
      <Route path='Product3' element={<Product3/>}/>
      </Route>
      <Route path='/Student'  element={<Student/>}>
        <Route path='/Student/:name' element={<Student/>}/>
      </Route>
    </Routes>
  </>
  
  )
};

export default App