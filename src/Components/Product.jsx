import React, { useContext } from 'react'
import './Style.css'
import { CreateContext } from '../App'

const Product = ({ product }) => {
    const { cart, setCart } = useContext(CreateContext)
    const AddCart = () => {
        setCart([...cart, product]);
    }
    const RemoveCart = (id) => {
        setCart(cart.filter((item) => id !== item.id));
    }
    return (
        <>
            <div className='Product-outer'>
                <div className='Img'>
                    <img src={product.images} alt={product.name} />
                </div>
                <div className='product-details'>
                    <h3>{product.name}</h3>
                    <p>Price Rs : {product.amount}</p>

                    {cart.includes(product) ?
                        <button className='button-remove' onClick={() => RemoveCart(product.id)}>Remove from cart</button> :
                        <button className='button-add' onClick={() => AddCart(product)}>Add to cart</button>}


                </div>

            </div>
        </>
    )
}

export default Product