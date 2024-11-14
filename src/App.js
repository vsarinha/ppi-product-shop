import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Shop from './components/Shop';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </div>
    );
}

export default App;
