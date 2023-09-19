import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App.jsx'
import './theme-variables.scss';
import 'tiny-ui/dist/styles/index.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoTags from './components/TodoTags/TodoTags.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/tags",
        element: <TodoTags />
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
