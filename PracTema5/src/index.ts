import * as _ from 'lodash';

/*
import './estilo.css';
import Imagen from './DiplomadoGeneraldeMetrologia.jpg';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';
import './estilos.scss';
*/

function  componente(){
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola', 'Webpack'], ' ');
    return elemento;
}

document.body.appendChild(componente());
//document.body.classList.add('fondo');