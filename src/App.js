
import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/footer';
import Content from './components/content';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Blog from './components/blog';
import SingleBlog from './components/singleblog';
import Contact from './components/ContactMe';
import NotFound from './components/notfound';
function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog/>} >
        <Route path=":blogid" element={<SingleBlog/>}/>
      </Route>
      <Route path="/ContactMe" element={<Contact/>} />
      <Route path="*" element={<notfound />}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;

{/* <NavBar />
<Content />
<Footer /> */}
