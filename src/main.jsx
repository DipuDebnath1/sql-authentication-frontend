import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import User from './User.jsx';
import Banner from './Banner.jsx';
import UserProvider from './provider/UserProvider.jsx';
import Adimin from './Adimin.jsx';
import Privet from './privet/Privet.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/',
        element: <Banner />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '/admin',
        element: <Privet>
          <Adimin />
          </Privet>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>

  </React.StrictMode>,
)
