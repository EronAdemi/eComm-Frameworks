import './App.css';
import { BrowserRouter } from "react-router-dom";
import Links from './components/routes';
import store from './store/index';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Links />
          <ToastContainer />
        </BrowserRouter>
      </div>
    </Provider>

  )
}

export default App
