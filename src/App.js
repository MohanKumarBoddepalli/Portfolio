import "./assets/main.css";
import "./App.css";
import Profile from "./component/profile/index";
import Skills from "./component/skills";
import Experience from "./component/Experience";
import Footer from "./component/footer";

function App() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 gap-10 min-h-[95vh] content-baseline">
        <Profile />
        <div className="flex flex-col gap-10 p-4">
          <Skills />
          <Experience />
        </div>
      </div>
      <footer className="min-h-[5vh]">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
