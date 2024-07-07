import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/cartScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ShippingScreen from './Screens/ShippingScreen'
import PrivateRoute from './Screens/PrivateRoute'
import PaymentScreen from './Screens/paymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'


 


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route   path='/product/:id' element={<ProductScreen/>}/>
      <Route   path='/cart' element={<CartScreen/>}/>
      <Route   path='/login' element={<LoginScreen/>}/>
      <Route   path='/register' element={<RegisterScreen/>}/>
      
      <Route path='' element={<PrivateRoute/>}>
      <Route   path='/shipping' element={<ShippingScreen/>}/>
      <Route   path='/payment' element={<PaymentScreen/>}/>
      <Route   path='/placeorder' element={<PlaceOrderScreen/>}/>
      
      </Route>

    </Route>
  )
)
 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
