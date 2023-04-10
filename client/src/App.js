import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import Posts from './components/posts/Posts';
import RootLayout from './components/Router/Root';


const router = createBrowserRouter([
  
  {path: "/", element: <Login/>},
  {path: "/registration", element: <Registration/>},
  {path: "/dashboard",
   element: <RootLayout/>,
   children: [

     {path: "/dashboard", element: <Posts/>},
   ]
  }
  ]);

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
