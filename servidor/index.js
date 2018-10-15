import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';
import bodyPssarser from 'body-parser';
import bodyParser from 'body-parser';

//creando el servidor

const app= express();

//cinfigurando el servidor

app.use(bodyPssarser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use( cors () );

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://hvp.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://antesdepartir',
    issuer: "https://hvp.auth0.com/",
    algorithms: ['RS256']
});


// se revisa y validan los scopes

const checkScopes = jwtAuthz (['read:antesdepartir']);

app.get('/productos', jwtCheck, checkScopes, (req,res) =>{

let productos = [
  {
      "id" : 0,
      "nombre" : "PERFIL",
      
      "imagen" : "LUZ",
      "descripcion": "Ingresa tus datos personales"
  },
  {
      "id" : 1,
      "nombre" : "CONTACTOS",
      
      "imagen" : "LUZ",
      "descripcion": "Registra a tus contactos de aviso"
  },
  {
      "id" : 2,
      "nombre" : "DOCUMENTOS",
    
      "imagen" : "LUZ",
      "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
  },
  {
      "id" : 3,
      "nombre" : "LOCALIZACIÓN",
     
      "imagen" : "LUZ",
      "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
  },
  {
      "id" : 4,
      "nombre" : "PENSAMIENTOS",
     
      "imagen" : "LUZ",
      "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
  },
  {
      "id" : 5,
      "nombre" : "PENDIENTES",
      
      "imagen" : "LUZ",
      "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
  },
  {
      "id" : 6,
      "nombre" : "DESEOS",
     
      "imagen" : "LUZ",
      "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
  },
  {
      "id" : 7,
      "nombre" : "AÑADIR ANTES DE PARTIR",
     
      "imagen" : "LUZ",
      "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
  }
]

res.json(productos);

});


app.listen(5000, () =>{

    console.log('servidor funcionando');


})