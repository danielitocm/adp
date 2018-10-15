import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
     state = {}
     render() { 
          return (
               <div className="contenedor-nosotros">
                    <div className="imagen">
                         <img src="/img/luz.jpg" alt="imagen nosotros" />
                    </div>
                    <div className="contenido">
                         <h2>Sobre Nosotros</h2>
                         <p> La idea surgió cuando platicabamos (una colega y yo) sobre
                             el momento de dejar este mundo, y llegamos a la
                             conclusión de que no podemos controlar cuando ni como...
                             pero sí podemos de alguna manera dejar paz y orden a los
                             que amamos. Estamos convencidos que el orden genera armonia, paz
                             y mucha certeza. No siempre es fácil lograrlo, y por 
                             eso nosotros te ayudamos a lograrlo con diferentes herramientas y servicios
                             para:
                         </p>

                         <ul>BIENES MATERIALES
                             <li>Almacenar los datos de tus bienes de forma segura.</li>
                             <li>Guardar localización de papeles importantes.</li>
                             <li>Aviso a tus contactos seleccionados.</li>
                             <li>Resguardo de tus fotos preferidas, pensamientos, etc.</li>
                             <li>Todo lo que tu quieras ordenar lo guardamos.</li>
                         </ul>

                        <br></br>

                        <ul> ASESORIA PROFESIONAL
                            <li>Abogados</li>
                            <li>Tanatólogos</li>
                            <li>Psicólogos</li>
                            <li>Médicos</li>
                            <li>Otros.</li>

                        </ul>

                    </div>
               </div>

           )
     }
}
 
export default Nosotros;