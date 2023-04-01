import Navbar from './components/Navbar';
// import Home  from './components/Home'; 
import Explore  from './components/Explore'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Explore' element={<Explore />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App;
