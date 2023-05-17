import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './layout/Navbar';
import About from './layout/About';
import Code from './layout/Code';
import Design from './layout/Design';
import Blog from './layout/Blog';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ='/' element={<About/>} />
        <Route path = '/code' element={<Code/>} />
        <Route path = '/design' element={<Design/>} />
        <Route path = '/blog' element={<Blog/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
