// 


// import React from "react";
// import  ReactDOM  from "react-dom/client";
// // 2) Get a reference to the div with ID root 
// const element=document.getElementById('root');
// // 3) Tell React to take control of that element
// const root = ReactDOM.createRoot(element);
// // 4) create a componenet
// function App()
// {
//     let message;

//     if(   Math.random()>0.5)
//     {
//          message="hii there"
//     }
//     else
//          message= 'bye there';
    
//     return <h1>{message}</h1>
// }
// // 5) Show the component on the screen
// root.render(<App />);

import React from "react";
import  ReactDOM  from "react-dom/client";
const element=document.getElementById('root');
const root = ReactDOM.createRoot(element);
function App()
{
    const name="Amandeep Kaur"
   return ( <div>
    My name is:
    <h1>{name}</h1>
    <input placeholder="hi there"/>
</div>);
}
root.render(<App />);