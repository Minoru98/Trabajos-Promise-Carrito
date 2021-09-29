import React from 'react'
import { Button } from '@material-ui/core';


const Producto = ({ producto, cart, setCart, products }) => {
  // Constante que guarda las propiedades del estado
  const { title, price, id, img } = producto;

  // Funcion para agregar  al cart
  const addProducto = id => {
    const producto = products.filter((producto) => producto.id === id);
    setCart([...cart, ...producto]);
  }

  // Funcion para eliminar 
  const delProducto = (id) => {
    const products = cart.filter(producto => producto.id !== id)
    setCart(products)
  }

  return (
    <div className="container-img">
      <ul>
      <div>
            <img src={img} alt="imagen" />
        </div>
        <li>{title}</li>
        <li>U${price}</li>

        {products ? (
          <Button variant="contained" type="button" onClick={() => addProducto(id)}>
            Agregar al carrito
          </Button>
        ) : (
          <div>
            <Button className="container-confirm" variant="contained" type="button" onClick={() => delProducto(id)}>
              Confirmar
            </Button>

            <Button className="container-delete" variant="contained" type="button" onClick={() => delProducto(id)}>
              Eliminar
            </Button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Producto;