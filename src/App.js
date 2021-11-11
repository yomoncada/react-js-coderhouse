import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CheckoutContainer } from './components/CheckoutContainer/CheckoutContainer';

function App() {  
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
            <Route exact path="/category/:categoryId">
                <ItemListContainer />
            </Route>
            <Route exact path="/item/:itemId">
                <ItemDetailContainer />
            </Route>
            <Route exact path="/contact">
                <h1>Contacto</h1>
            </Route>
            <Route exact path="/cart">
              <CartContainer/>
            </Route>
            <Route exact path="/checkout">
                <CheckoutContainer/>
              </Route>
            <Route path="*">
                <Redirect to="/"/>
            </Route>
            {/* <Route path="*">
                <h2>404... no encontrado</h2>
            </Route> */}
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
