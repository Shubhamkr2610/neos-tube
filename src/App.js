import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { HomePage } from './pages/homepage/HomePage';

function App() {
  return (

    <BrowserRouter>
    <div className="app">
     <Header/>
     <Routes>
       <Route path='/' element={<HomePage/>} />
     </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
