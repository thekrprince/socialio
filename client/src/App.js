import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import Posts from './components/posts/Posts';
import RootLayout from './components/Router/Root';
import { useState } from 'react';




function App() {
  const [color, setColor] = useState('orange');
  const router = createBrowserRouter([
  
    {path: "/", element: <Login setColor={setColor}/>},
    {path: "/registration", element: <Registration/>},
    {path: "/dashboard",
     element: <RootLayout/>,
     children: [
  
       {path: "/dashboard", element: <Posts setColor={setColor}/>},
     ]
    }
    ]);
    
  
  return (
    <div className={`App ${color}`}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
