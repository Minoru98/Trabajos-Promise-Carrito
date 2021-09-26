import logo from '../../assets/logo192.png';
import './NavBar.css'
//External components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Cart from '@mui/icons-material/ShoppingCart';


const NavBar = (props) => {

  return (
    <header>
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
         <div className="cart-buttonNav">
         <Button variant="contained">
         <Cart> Start </Cart>
          <p>1</p>
         </Button>
         </div>
        </Toolbar>
      </AppBar>   
    </header>
  );
}

export default NavBar;
