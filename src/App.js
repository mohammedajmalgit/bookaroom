import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { ContextProvider } from './context/Context';


function App() {
  return (
    <div className="App poppins">
      <div className="h-[100vh] w-[100vw]">
        <Router>
          <ContextProvider>
            <Navbar />
            <Routes>
              <Route path='' Component={() => <Home />} />
              <Route path='/dashboard' Component={() => <Dashboard />} />
            </Routes>
            <ToastContainer />
          </ContextProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
