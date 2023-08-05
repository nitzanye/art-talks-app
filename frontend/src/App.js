import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import ImagePage from './components/ImagePage';

function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={<Gallery setSelectedArtwork={setSelectedArtwork} />}
          />
          <Route
            path='/image/:title'
            element={<ImagePage selectedArtwork={selectedArtwork} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
