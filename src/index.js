import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import Products from './components/Products';

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/products',
                element:<Products/>
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider  router={routes}/>
);

