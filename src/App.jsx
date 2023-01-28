import { HashRouter,Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Loggin from './pages/Loggin';
import Home from './pages/Home';
import './App.css'

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/products/:id' element={ <Product /> } />
                <Route path='/loggin' element={ <Loggin /> } />
            </Routes>
        </HashRouter>
    )
}

export default App;
