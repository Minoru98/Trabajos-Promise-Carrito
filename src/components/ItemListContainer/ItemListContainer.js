import { useEffect, useState } from 'react'
import Product from '../Product/Product';
import './ItemListContainer.css'


export default function ItemListContainer () {
    const [list, setList] = useState([])

    const getList = new Promise ((resolve) => {
        setTimeout (()=>{
            const mockList = [

                {
                    title: "Mochila",
                    img: '../../assets/Products/new1.png',
                    price: "90",
                    description: "Black print",
                    stock: "sin stock",
                  },
                  {
                    id: "2",
                    title: "Cartera",
                    img:  '../../assets/Products/new2.png',
                    price: "69",
                    description: "Cartera ultra liviana",
                    stock: "sin stock",
                  },
                  {
                    title: "Anteojos de Sol",
                    img: '../../assets/Products/new3.png',
                    price: "110",
                    description: "Anteojos RayBan METAL 3447",
                    stock: "sin stock",
                  },
                  {
                    title: "Apple Watch",
                    img: '../../assets/Products/new4.png',
                    price: "299",
                    description: "Reloj ultra liviano, con la mejor tecnologia",
                    stock: "sin stock",
                  },
                  {
                    title: "Billetera TH",
                    img: '../../assets/Products/new5.png',
                    price: "49",
                    description: "Billetera de cuero",
                    stock: "sin stock",
                  },
            ]
            resolve(mockList)
        }, 2000)

    })

    useEffect (() => {
        getList.then((res) => {
            setList(res)
        })
    },[]) 

  
    return (
      <div className="container-general">

        {list.length !== 0}
        {list.map((item, index) => (
          <Product
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.img}
          />
        ))}    
      </div>
    );

  }
