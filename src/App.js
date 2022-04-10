import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import Review from './Components/Review/Review';
import Register from './Components/Register/Register';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={
          <RequiredAuth>
            <Orders>
            </Orders>
          </RequiredAuth>
        }></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
