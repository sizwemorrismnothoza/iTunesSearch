import './App.css';
import { useState } from 'react';
import Search from './components/Search';
import Favorites from './components/Favorites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

//this property is going to be set in the display search results component and displayed in the favorites component
const [favorites, setFavorites] = useState([]);

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/favorites" element={<Favorites setFavorites={setFavorites} favorites={favorites} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
