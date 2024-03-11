import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutMe from './assets/pages/AboutMe.jsx'
import Contact from './assets/pages/Contact.jsx'
import Resume from './assets/pages/Resume.jsx'
import Portfolio from './assets/pages/Portfolio.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router =createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        index: true,
        element:<AboutMe/>,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

