import { HashRouter,Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import NavigationBar from './components/NavigationBar'
import Loader from './components/Loader/Loader';
import Purchases from './pages/Purchases';
import Footer from './components/Footer/Footer';
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
            {isLoading && <Loader />}
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/products/:id' element={ <Product /> } />
                <Route path='/loggin' element={ <Loggin /> } />

                <Route element={ <ProtectedRoutes /> }>
                    <Route path='/purchases' element={ <Purchases />} />
                </Route>
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default App;
