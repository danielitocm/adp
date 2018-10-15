import React from 'react';
import './SingleProductos.css';

const SingleProducto = (props) => {

     if(!props) return null;

     const {imagen, nombre, descripcion} = props.producto;
     
     return (
          <div className="info-producto">
               <div className="imagen">
                    <img src={`/img/${imagen}.jpg`} alt={nombre} />
               </div>    

               <div className="info">
                    <h2>{nombre}</h2>
                    
                    <p>{descripcion}</p>
               </div>
               
          </div>
     )
}
 
export default SingleProducto;

//<p className="precio">$ {precio}</p>