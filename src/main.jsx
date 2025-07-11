import { createBrowserRouter, RouterProvider } from 'react-router'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'

const routes = createBrowserRouter([
  {path: "/",
    element: <App/>,
    children:[{index: true, element:<Home/>},

    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routes} />
  </StrictMode>,
)
