import { createBrowserRouter, RouterProvider } from 'react-router'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Service from './Service.jsx'
import About from './About.jsx'

const routes = createBrowserRouter([
  {path: "/",
    element: <App/>,
    children:[{index: true, element:<Home/>}, 
      {path:"/About" , element: <About/>},
      {path:"/Contact" , element: <Contact/> },
      {path:"/Service" , element: <Service/> },

    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routes} />
  </StrictMode>,
)
