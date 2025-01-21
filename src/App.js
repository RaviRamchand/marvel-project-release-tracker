import './App.css';
import Home from './Home';
import Info from './Info';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/info/:id' element={<Info />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
