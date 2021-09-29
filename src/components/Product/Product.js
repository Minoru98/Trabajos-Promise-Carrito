import React from 'react';
import { Button } from '@mui/material';
//Functional Component


    const Product = (props) => {
     

    return (
      <div className="container-others">
        <ul>
        <div>
              <img src={`./assets/products/${props.image}`} alt="imagen" />
          </div>
          <li>{props.title}</li>
          <li>U${props.price}</li>

            <Button variant="contained" color="error" type="button">
              Sin Stock
            </Button>
        </ul>
      </div>    
    );
  };


   
       
export default Product;