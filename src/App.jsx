import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
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
