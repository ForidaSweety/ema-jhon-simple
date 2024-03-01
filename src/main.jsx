import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Header/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import CheckOut from './components/CheckOut/CheckOut';
import SignUp from './components/SignUp/SignUp';
import AuthProviders from './components/providers/AuthProviders';
import PrivateRoutes from './routes/PrivateRoutes';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
        loader: () => fetch('http://localhost:5000/totalProducts')

      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader

      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>

      },
      {
        path: 'checkout',
        element: <PrivateRoutes>
          <CheckOut></CheckOut>
        </PrivateRoutes>
      },
      {
        path: 'login',
        element: <Login></Login>

      },
      {
        path: 'signup',
        element: <SignUp></SignUp>

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
)
