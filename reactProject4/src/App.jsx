import './App.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header/header'
import Page1 from './pages/page1'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Page1/>
        <Routes>
          <Route path='/Page1' index element = {Page1}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

