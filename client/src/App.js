import './App.css';
import Registration from './components/authentication/Registration';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Registration/>
      {/* <ToastContainer/> */}
    </div>
  );
}

export default App;
