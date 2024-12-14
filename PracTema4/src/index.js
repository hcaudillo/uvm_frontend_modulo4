import _  from 'lodash'
import './estilo.css';
import Imagen from './DiplomadoGeneraldeMetrologia.jpg';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';
import './estilos.scss';


function  componente(){
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola', Datos[0][1]], ' ');
    elemento.classList.add('fondo');
    const miImagen =  new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);

    console.log(Datos);
    return elemento;
}

console.log('Archivo yaml.... ', yaml.tutorial);
console.log('Archivo jso5.... ', json5.unquoted);
document.body.appendChild(componente());
//document.body.classList.add('fondo');