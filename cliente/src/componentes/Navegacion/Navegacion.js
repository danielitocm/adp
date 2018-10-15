import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Navegacion.css';

class Navegacion extends Component  {

    iniciarSesion = () => {

        this.props.auth.login();
    }
    
    cerrarSesion = () => {
        
        this.props.auth.logout();

    }

    render(){
        //console.log(this.props.auth);
       // console.log(this.props.auth.getAccesToken() );

       const {isAuthenticated} = this.props.auth;
       let resultado;

       if ( isAuthenticated() ){

        resultado = <a onClick={this.cerrarSesion}> Cerrar Sesión</a>


       }else{

        resultado = <a onClick={this.iniciarSesion}> Iniciar Sesión</a>

       }

        return ( 

            
            <nav className="navegacion">
                 <NavLink to={'/home'} activeClassName="activo">Home</NavLink>
                 <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
                 <NavLink to={'/productos'} activeClassName="activo">Servicios</NavLink>
                 <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
                 <NavLink to={resultado} activeClassName="activo">{resultado}</NavLink>
                 
                 
            </nav>



        );
    }
    
}
 
export default Navegacion;
//export default footer;


/*


<footer className="footer">
                 <NavLink to={'/home'} activeClassName="activo">Home</NavLink>
                 <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
                 <NavLink to={'/productos'} activeClassName="activo">Servicios</NavLink>
                 <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
                 <NavLink to={resultado} activeClassName="activo">{resultado}</NavLink>
                 
                
                 
            </footer>

            </React.Fragment>

            */