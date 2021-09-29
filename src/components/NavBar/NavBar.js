import logo from '../../assets/logo192.png'
import './NavBar.css'
//External components
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';


const NavBar = (props) => {

  return (
    <header>
      <div> 
        <AppBar position="static" className="main-navbar">
        <Toolbar>
          <Typography variant="h6">
            <div className= "container-logo">
               <img src= {logo} alt={'logo principal'}/>
            </div>
          </Typography>
          <div>
              <ul className="navbar-list"> 
                   <li><Button color="inherit" >Inicio</Button></li>
                   <li><Button color="inherit" >Producto</Button></li>
                   <li><Button color="inherit" >Preguntas Frecuentes</Button></li>
                   <li><Button color="inherit" >Contacto</Button></li>
              </ul>
         </div>
         <div className="container-search">
             Buscar <input type="search"></input>
         </div>
        
        </Toolbar>
      </AppBar>   
     </div>
    </header>
  );
}

export default NavBar;
