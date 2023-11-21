import React from 'react'
import NoItemsMessage from './NoItemsMessage'
import { useSelector } from 'react-redux'

const ItemsContainer = () => {
 const {cartItems} = useSelector((store) => store.cart )
 console.log(cartItems)
  return (
    <div>
        {cartItems < 10 && <NoItemsMessage /> }
        
        <div></div>
    </div>
  )
}

export default ItemsContainer