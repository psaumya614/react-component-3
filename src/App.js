
import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/footer';
import Content from './components/content';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Blog from './components/blog';
import Contact from './components/ContactMe';
function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/ContactMe" element={<Contact/>} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;

{/* <NavBar />
<Content />
<Footer /> */}
