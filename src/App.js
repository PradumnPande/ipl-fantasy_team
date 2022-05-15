import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScheduleMatch from './pages/ScheduleMatch';

function App() {
  return (
    <div className="App">
      <ToastContainer 
      position="top-right"
      autoClose={4000}
      /> 
      <BrowserRouter>      
        <Routes>
          <Route element={<ScheduleMatch/>} path="/schedule"/>                                                          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;