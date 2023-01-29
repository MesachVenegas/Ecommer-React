import { HashRouter,Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import Purchases from './pages/Purchases';
import Product from './pages/Product';
import Loggin from './pages/Loggin';
import Home from './pages/Home';
import './App.css'

function App() {

    return (
        <HashRouter>
            <NavigationBar/>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/products/:id' element={ <Product /> } />
                <Route path='/loggin' element={ <Loggin /> } />
                <Route path='/purchases' element={ <Purchases />} />
            </Routes>
        </HashRouter>
    )
}

export default App;
