import { HashRouter,Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import Loader from './components/Loader/Loader';
import Purchases from './pages/Purchases';
import { useSelector } from 'react-redux';
import Product from './pages/Product';
import Loggin from './pages/Loggin';
import Home from './pages/Home';
import './App.css'

function App() {
    const isLoading = useSelector(state => state.isLoading);

    return (
        <HashRouter>
            <NavigationBar/>
            {isLoading ? <Loader /> : 'none'}
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
