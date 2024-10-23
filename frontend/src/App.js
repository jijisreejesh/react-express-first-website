import logo from './logo.svg';
import './App.css';
import { Router,BrowserRouter,Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Formdisplay from './components/Formdisplay';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path="/display" element={<Formdisplay/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
