import './App.css';
import { Route, Routes } from 'react-router-dom';
import Weather from './Weather';
import Home from './Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='weather' element={<Weather />} />
        </Route>
        
       
      </Routes>
    </div>
  );
}

export default App;
  

  
  
  
