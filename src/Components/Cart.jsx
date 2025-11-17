import React, { useContext, useEffect, useState } from 'react'
import './Style.css'
import { CreateContext } from '../App'

const ViewCart = () => {
  const { cart, setCart } = useContext(CreateContext)
  console.log(cart)
  const [total, setTotal] = useState(0)
  const RemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  useEffect(() => {
    setTotal(cart.reduce((cur, item) => cur + parseInt(item.amount), 0))

  }, [cart])

  return (<>
    <h1 style={{
      fontSize: '2rem',
      padding: '2rem',
      textAlign: 'center',
    }}>Cart Products</h1>
    <div className='Cart-Container'>
      {cart.map(item =>
        <div key={item.id} className='Cart-products'>
          <div>
            <img src={item.images} alt={item.name} />
          </div>
          <div>
            <h3>{item.name}</h3>
            <p>Price Rs : {item.amount} </p>
            <button className='button-remove' onClick={() => RemoveItem(item.id)}>remove from cart</button>
          </div>
        </div>

      )}

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '5rem' }}>Total Cart Value : {total}</h2>
      </div>
    </div>
  </>
  )
}

export default ViewCart;