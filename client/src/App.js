import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';

const router = createBrowserRouter([
  {path: "/", element: <Registration/>},
  {path: "/login", element: <Login/>},
  ]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
