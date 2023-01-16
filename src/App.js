import './App.css';
import Header from "./components/Header"
import Profile from './components/Profile';
import Skills from "./components/Skills"

function App() {
  return (
    <>
    <div className='App'>
       <Header/>
       <Skills/>
       <Profile/>
    </div>
    </>
  );
}

export default App;
