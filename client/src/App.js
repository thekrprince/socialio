import './App.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import { Children } from 'react';



function App() {

  // const router = createHashRouter([
  //   {

  //     path: "/",
  //     element: (
  //       <Registration/>
  //     ),
  //   children: [
  //     {
  //       path: "/",
  //       element: (
  //         <Registration/>
  //       )
  //     }
  //   ]

  //   }
  // ]) ;

  return (
    <div className="App">
      {/* <RouterProvider router={router}/> */}
      <Registration/>
    </div>
  );
}

export default App;
