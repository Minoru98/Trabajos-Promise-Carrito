import React from 'react'
//Import components 
import './CartWidget.css';
import ItemCount from '../ItemCount/ItemCount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';


const CartWidget = ({ cart, setCart }) => {
  return (
    <div className="cart">
         <Button variant="contained">
             <ShoppingCartIcon> Start </ShoppingCartIcon>
             {cart.length === 0 ? (<p>0</p>
             
    
       ) : (
         cart.map((producto) => (
           <ItemCount
             key={producto.id}
              producto={producto}
             cart={cart}
              setCart={setCart}
           />
         ))
      )}
         </Button>
    </div>

  )
}

export default CartWidget;