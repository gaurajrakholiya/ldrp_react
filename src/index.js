
// import {a,b} from './app'

// import './style.css'
// import './style1.css'

// console.log(a)
// console.log(b)


// dependencies no  vapratu hoy te
// devdependencies program ma vapratu hoy
// 


import React from 'react'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<h1> hello world!</h1>);