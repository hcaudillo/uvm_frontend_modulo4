import _  from 'lodash'
import './estilo.css';
import Datos from './datos.csv';
import Imagen from './DiplomadoGeneraldeMetrologia.jpg';

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
           console.log('sW registrado....', registration);  
        }).catch(err => {
            console.log('SW NO registrado.. ', err);
        });
    });
}

function  componente(){
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola', Datos[0][1]], ' ');
    elemento.classList.add('hola');
    const miImagen =  new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);
    return elemento;
}


document.body.appendChild(componente());