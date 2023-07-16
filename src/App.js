import {HashRouter, Route, Routes} from 'react-router-dom'
import Projects  from './projects/projects';
import Experience from './experience';
import Main from './main'
import Nav from './Navigation';
import './App.css';
import Footer from './footer'


function App() {
  return (
    <HashRouter>
      <Nav/>
      <Routes>
        <Route
          path='/'
          element={<Main />}
          >
        </Route>
        <Route                
          path='/experience' 
          element={<Experience />}
        >
        </Route>
        <Route 
          path='/projects'
          element={<Projects />}
        >
        </Route>
      </Routes>
      <Footer/>

    </HashRouter>
  );
}

export default App;
