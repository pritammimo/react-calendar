import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TuiCalendar from './Components/TuiCalendar';
import FullCalendar from './Components/FullCalendar';
import BigCalendar from './Components/BIgCalendar';
import SyncfusionCalendar from './Components/SyncfusionCalendar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/FullCalendar" replace />} />
      <Route path="/FullCalendar" element={<FullCalendar/>}/>
      <Route path="/BigCalendar" element={<BigCalendar/>}/>
      <Route path="/SyncfusionCalendar" element={<SyncfusionCalendar/>}/>
      <Route path="/TuiCalendar" element={<TuiCalendar/>} />
      </Routes>
    </BrowserRouter>





  </>
  );
}

export default App;
