import React from 'react';
import { createRoot } from 'react-dom/client';

/*
El reactDom que se instalo fue la version 19, por lo que se modifico 
la sintaxis para  usar la sintaxis de la v19
*/
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<h1>Hola REAACT desde webpack</h1>);

/*
ReactDom.createRoot(document.getElementById('root')).render(
   
)
*/
