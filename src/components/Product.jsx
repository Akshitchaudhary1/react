import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div>
        <h1>product main page</h1>
    </div>
    <div>
    <NavLink to="Product1">product 1</NavLink>
    <NavLink to="Product2">product 2</NavLink>
    <NavLink to="Product3">product 3</NavLink>
</div>
    </>
  )
}

export default Product