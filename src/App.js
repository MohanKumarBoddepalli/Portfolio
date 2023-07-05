import {HashRouter, Route, Routes} from 'react-router-dom'
import Contacts  from './contact';
import About from './about';
import Main from './main'
import Nav from './Navigation';
import './App.css';


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
          path='/about' 
          element={<About />}
        >
        </Route>
        <Route 
          path='/contact'
          element={<Contacts />}
        >
        </Route>
      </Routes>

    </HashRouter>
  );
}

export default App;
