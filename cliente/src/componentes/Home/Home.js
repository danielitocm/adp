import React, { Component } from 'react';
import '../Home/home.css';



class Home extends Component {
     state = {}
     render() { 
          return (
               <div className="contenedor-home">
                    <div className="imagen">
                         <img src="/img/luz.jpg" alt="imagen Hole" />
                    </div>
                    <div className="contenido">
                         <h2>Home</h2>
                         <p>Ver partir a una persona resulta no muy sencillo, y sobre todo si es
                             un amigo o un familiar querido. El partir es un hecho que todos tenemos
                             seguro, pero que muy pocas veces preparamos, por diversas razones. ANTES
                             DE PARTIR te ayuda a que ese momento sea ordenado y en paz. Deja todo listo
                             ANTES DE PARTIR.
                         </p>
                    </div>

 
      
               </div>




           )
     }
}




 
export default Home;







/*

import { Divider } from 'antd';

ReactDOM.render(
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    <Divider />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    <Divider>With Text</Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    <Divider dashed />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
  </div>,
  mountNode);  */