import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from './components/Layout/main';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import { dataLoaders } from './Loders/DataLoader';

const route =createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader:()=>fetch('products.json'),
        element:<Shop></Shop>
      },
      {
        path:'orders',
        loader: dataLoaders,
        element:<Orders></Orders>
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'about',
        element:<About></About>
      }
    ]
  }
  
])
function App() {
  return (
    <div>
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
