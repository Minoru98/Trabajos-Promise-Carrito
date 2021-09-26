import React from 'react';
import productImg from '../../assets/Products/feature3.png'
import productImgUno from '../../assets/Products/feature2.png'
import productImgDos from '../../assets/Products/feature1.png'
import productImgTres from '../../assets/Products/feature4.png'
import './Product.css';
import ItemCount from '../ItemCount/ItemCount';

//Functional Component

const Product = (props) => {
    
    return(
    <div>
        <div className="container-producto">
            <div>
                <img src={productImg} alt="" />
            </div>
            <h3>AirPods</h3>
            <p>U$ 120 </p>
            <ItemCount/>
            <button>Comprar</button>
        </div>
        <div className="container-producto">
             <div>
                <img src={productImgUno} alt="" />
            </div>
            <h3>Parlante Bose Soundlink</h3>
            <p>U$ 220</p>
            <ItemCount/>
            <button>Comprar</button>
        </div>
        <div className="container-producto">
             <div>
                <img src={productImgDos} alt="" />
            </div>
            <h3>Sony WH-1000XM3</h3>
            <p>U$ 210</p>
            <ItemCount/>
            <button>Comprar</button>
        </div> 
        <div className="container-producto">
             <div>
                <img src={productImgTres} alt="" />
            </div>
            <h3>Apple Watch SE</h3>
            <p>U$ 250</p>
            <ItemCount/>
            <button>Comprar</button>
        </div>              
     </div>
    )  
}

export default Product;