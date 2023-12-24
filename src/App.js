import './assets/main.css'
import './App.css';
import Profile from './component/profile/index'
import Skills from './component/skills';
import Experience from './component/Experience'

function App() {
  return (
    <div className='grid grid-cols-1'>
      <Profile />
      <div className='flex flex-col gap-10 lg:px-10'>
        <Skills />
        <Experience />
      </div>
      <div>
      <Profile />
      </div>
    </div>
  );
}

export default App;
