import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartWidget from "../CartWidget/CartWidget";
import './ListProducts.css';

export default function ListProducts(){
  const [products] = useState([
    {
      id: "1",
      title: "HEADPHONE ONE BLACK",
      img: '../../assets/Products/feature1.png',
      price: "29",
      description: "Auriculares negros excelente calidad y precio",
      stock: 100,
    },
    {
      id: "2",
      title: "SPEAKER BEATS PILL",
      img:  '../../assets/Products/feature2.png',
      price: "199",
      description: "Parlante Beats Pill sonido ultra limpio",
      stock: 100,
    },
    {
      id: "3",
      title: "APPLE AIRPODS",
      img: '../../assets/Products/feature3.png',
      price: "120",
      description: "Auriculares Apple con garantia",
      stock: 100,
    },
    {
      id: "4",
      title: "SMARTWATCH F9 NEGRO",
      img: '../../assets/Products/feature4.png',
      price: "99",
      description: "Reloj ultra liviano, con la mejor tecnologia",
      stock: 100,
    },
  ]);

  /* Estado del carrito */
  const [cart, setCart] = useState([]);

  return (
    <div className="container-general">
      <h3>Products</h3>
      {products.map((producto) => (
        <ItemCount
          key={producto.id}
          producto={producto}
          cart={cart}
          setCart={setCart}
          products={products}
        />
      ))}

      <CartWidget cart={cart} setCart={setCart} />

    </div>
  );
}
