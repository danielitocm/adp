import React from 'react';
import { Link } from 'react-router-dom';

const Producto = (props) => {
     const {imagen, nombre, id } = props.informacion;
     return (
          <li>
                    <img src={`img/${imagen}.jpg`} alt={nombre} />
                    <p>{nombre} </p>
                    <Link to={`/producto/${id}`}>CREAR / MODIFICAR</Link>
                    <Link to="../Perfil">p</Link>
          </li>
     )
}
 
export default Producto;

//<span> $ {precio} </span>