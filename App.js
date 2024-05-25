// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <div className="App">
     



{/* below code for router */}
<BrowserRouter>
<div className="header">
  <div className="logo"> <h1>LOGO </h1></div>
  <div className="hm"> <Link to='/'><h2>HOME</h2></Link> </div>
  <div className="hm"> <Link to='/Contact'><h2>CONTACT</h2></Link> </div>
  <div className="hm"> <Link to='/About'><h2>ABOUT</h2></Link> </div>


</div> {/* header ends  */}


 <Routes>
   <Route path='/' element={<Home></Home>}>Home</Route>
  <Route path='/Contact' element={<Contact></Contact>}>Contact</Route>
  <Route path='/About' element={<About></About>} >About</Route>
</Routes>
</BrowserRouter>
      
    
      </div>
  );
}

export default App;
