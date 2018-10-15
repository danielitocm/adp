import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
     state = {}
     render() { 
          return (
               <div className="contenedor-perfil">
                    <div className="imagen">
                        
                    </div>
                    <form action="#" method="get" name="formulario1">
                                  <p>
                                    <label for="txtNombre">Nombre</label>
                                    <input id="txtNombre" type="text" name="txtNombre" placeholder="Ejem Juan Pablo" maxlength="20" size="20"/> 
                                    <span id="txtNombreError" class="error0"></span>
                                  </p>
                                  <p>
                                    <label for="txtApellidos">Apellidos</label>
                                    <input id="txtApellidos" type="text" name="txtApellidos" placeholder="Ejem.: I. " maxlength="30" size="25" />
                                      <span id="txtApellidosError" class="error0"></span>
                                  </p>
                                  <p>
                                    <label for="txtEmail">Email</label>
                                    <input id="txtEmail" type="email" name="txtEmail" placeholder="Ejem.: nom@dominio.org" maxlength="30" size="25" />
                                      <span id="txtEmailError" class="error0"></span>
                                  </p>
           
                                    <p>
                                    <label for="numEdad">Edad</label>
                                    <input id="numEdad" type="number" name="numEdad" placeholder="1 - 120" maxlength="3" size="3" />
                                        <span id="numEdadError" class="error0"></span>
                                  </p>
                                    <p>
                                    <label for="fechaNaci">Fecha nacimiento</label>
                                    <input id="fechaNaci" type="date"  name="diaFechaNaci"/>
                                        <span id="fechaNaciError" class="error0"></span>
                                  </p>
                                  
                                    <p>
                                    <label for="numCodPostal">Código postal</label>
                                    <input id="numCodPostal" type="number" name="numCodPostal" /> <input type="button" id="numCodPostalBoton" class="boton" value="Auto" onclick="autoProvinciaSelec()"/>
                                        
                                        <span id="numCodPostalError" class="error0"></span>
                                  </p>

                                      <p>
                                    <label for="Avisarcontacto">A quién quieres avisar</label><br></br>
                                    <select id="RecordatorioLogin" name="Recordatorio">
                                        <option value="-">Selecciona una opcion</option>
                                        <option value="29">Todos</option>
                                        <option value="04">UNO</option>
                                        <option value="11">Nadie</option>
                                       
                                      
                                      </select>
                                      <span id="RecordatorioLogin" class="error0"></span>
                                  </p>

                                    <p>
                                    <label for="RecordatorioLOgin">Cada cuando quieres que te recordemos LOGUEARTE</label><br></br>
                                    <select id="RecordatorioLogin" name="Recordatorio">
                                        <option value="-">Seleccione un periodo</option>
                                        <option value="29">Semanal</option>
                                        <option value="04">Mensual</option>
                                        <option value="11">Bimestral</option>
                                        <option value="14">Semestral</option>
                                        <option value="18">Anual</option>
                                        <option value="21">Personalizado</option>
                                      
                                      </select>
                                      <span id="RecordatorioLogin" class="error0"></span>
                                  </p>
                                    <p>
                                    <label for="numTelefFijo">Teléfono</label>
                                    <input id="numTelefFijo" type="number" maxlength="8" size="12" name="numTelefFijo" placeholder="Ejem.: 59454345" />
                                    <input id="numTelefMovil" type="number" maxlength="13" size="12" name="numTelefMovil" placeholder="Ejem.: 044 5566777777" />
                                    
                                    <span id="numTelefFijoError" class="error0"></span>
                                  </p>
                                  <p>
                                    <label for="modCuenta">Quieres recibir aviso por medio de:</label><br/>
                                    <input id="correo" type="radio" name="correo" value="0" /> CORREO
                                    <input id="telefono" type="radio" name="telefono" value="10" /> TELEFONO
                                      
                                      <span id="modCuentaError" class="error0"></span>
                                  </p>
                 
                                  <p>
                                    <label for="contactoSelec">Contacto preferido</label>
                                    <select name="contactoSelec">
                                        <option value="email">Correo electrónico</option>
                                        <optgroup label="Teléfono">
                                          <option value="telefono">Fijo</option>
                                          <option value="movil">Celular</option>
                                        </optgroup>
                                        <option value="correoordinario">Correo ordinario</option>
                                        <option value="sms">SMS</option>
                               
                                      </select>
                                      <span id="contactoSelecError" class="error0"></span>
                                  </p>
                               
                                  <p>
                                      <center>
                                          <input type="button" class="boton" id="botonenv" value="Enviar" onclick="enviarFormulario()"/>
                                          <input type="reset" class="boton" id="botonreset" value="Borrar" onclick="location.reload();"/>
                                          <input type="button" class="boton" id="botonreset" value="Calcular cuota" onclick="cuotaTotal()"/>
                                      </center>
                                  </p>
                                </form>

                    </div>
               

           )
     }
}


export default Perfil;