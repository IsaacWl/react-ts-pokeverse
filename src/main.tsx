import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SinglePokemon from './components/SinglePokemon' 
import Header from './components/partials/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Header /> 
    <Routes>
      <Route path='/' element={<App/> }/>
      <Route path='/pokemon/:pokemonNumber' element={<SinglePokemon />}/>
    </Routes>
  </BrowserRouter>
)
