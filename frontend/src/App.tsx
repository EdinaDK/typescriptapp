import React from 'react';
import './App.css';
import {
    Route,
    Routes
} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import ExplorePage from "./pages/ExplorePage";
import PracticePage from "./pages/PracticePage";
import UserPage from "./pages/UserPage";

function App() {
  return <>
      <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/practice' element={<PracticePage />} />
          <Route path='/user' element={<UserPage />} />
      </Routes>
  </>
  ;
}

export default App;
