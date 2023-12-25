import './assets/main.css'
import './App.css';
import Profile from './component/profile/index'
import Skills from './component/skills';
import Experience from './component/Experience'
import Footer from './component/footer';

function App() {
  return (
    <div className='grid grid-cols-1 gap-10'>
      <Profile />
      <div className='flex flex-col gap-10 p-4'>
        <Skills />
        <Experience />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
