import './App.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react';

function App() {
    // https://e-commerce-api-v2.academlo.tech/api/v1/products

    useEffect( () =>{
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then()
    },[])


    return (
        <div className="App">
            <h1>Hola</h1>
        </div>
    )
}

export default App
