import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import CreatePost from './components/posts/CreatePost';

const router = createBrowserRouter([
  {path: "/", element: <Login/>},
  {path: "/registration", element: <Registration/>},
  {path: "/posts", element: <CreatePost/>},
  ]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
