import React, { Component } from 'react';
import Producto from '../Producto/Producto';
import Buscador from '../Buscador/Buscador';
import './Productos.css';
import axios from 'axios';

class Productos extends Component {

    state = {
        productos : [],
        terminoBusqueda : ''
   }


   componentWillMount() {
       
    this.queryAPI();
    
}

queryAPI= () => {
  
   //console.log(this.props.auth.isAuthenticated() );
     //console.log(this.props.auth.getAccesToken() );

    const { getAccesToken } = this.props.auth;
    

     const headers = { 'Authorization': `Bearer ${getAccesToken ()}`};

     const url = 'http://localhost:5000/productos';

     return axios.get(url,{headers} )
     .then(respuesta => this.setState({productos:respuesta.data}));
   



}

/******************************************** */

busquedaProducto = (busqueda) => {
    if(busqueda.length > 3) {

        /*** */
            let productos = [...this.state.productos];
            let resultado;


            resultado = productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase()  ) !== -1
              ))

/******* */




/********** */

      this.setState({
        terminoBusqueda : busqueda,
        productos: resultado
      })
    } else {
       this.setState({
         terminoBusqueda: ''
       }, () => {

            this.queryAPI();

       }); 
    }
  }



/*************************************** */


login = () => {

    this.props.auth.login();
}


     render() { 

        const { isAuthenticated } = this.props.auth;

          return ( 
               <div className="productos">
                   
                        { isAuthenticated() && (

                            <React.Fragment>

                   <h2>Ingresar a  Servicios</h2>
                     <Buscador
                    busqueda={this.busquedaProducto}
                       />      
                           <ul className="lista-productos">

                               {Object.keys(this.state.productos).map(producto => (
                               <Producto
                                informacion={this.state.productos[producto]}
                                key={producto}
        />
))}
                    
                            </ul>
                       </React.Fragment>
                        )

                        }




                    

                    {
                        !isAuthenticated() && (

                            <div className="contenedor-boton">

                                <p>  Para comenzar a usar los servicios debes estar logueado: </p>

                                <a className="boton" onClick={ this.login }> INICIAR SESION </a>

                            </div>

                        )
                    }
               </div>
           )
     }
}
 
export default Productos;



/*
{Object.keys(this.props.productos).map(producto => “(
    <producto
        informacion={this.props.productos.[producto]}
        key={producto}
        />
))}
   */