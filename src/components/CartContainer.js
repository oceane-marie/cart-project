import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>Yout Bag</h2>
          <h4 className='empty-cart'>Is Currently Empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            Total: <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          Clear Cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
