import './App.css';
import { RouterProvider, createHashRouter, createBrowserRouter } from 'react-router-dom';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';




function App() {

  const router = createBrowserRouter([
    {

      path: "/",
      element: (
        <Login/>
      )
    },
    {
        path: "/",
        element: (
          <Login/>
        )
    }
    ],
  ) ;

  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <Login/> */}
      {/* <Registration/> */}
    </div>
  );
}

export default App;
