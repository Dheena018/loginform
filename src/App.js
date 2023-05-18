
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
// import BasicForms from './components/Basicforms/basicforms';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Navbar from './pages/navbar';
import NavbarOne from './pages/NavbarOne';
import NavbarTwo from './pages/NavbarTwo';
import NavbarThree from './pages/NavbarThree';
// import Home from './pages/home';
function App() {

  // const currentUser = true;
  
  const {currentUser} = useContext(AuthContext);


  const RequireAuth = ({children})=>{
    return currentUser ? children : <Navigate to={"/signup"} />
  };
  console.log(currentUser);
  
  return (
    <div className="App">
      <Routes>
          {/* <Route path='/' element={<Home />}></Route> */}
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/navbar' element={<Navbar />}></Route>
          <Route path='/navbarone' element={<NavbarOne />}></Route>
          <Route path='/navbartwo' element={<NavbarTwo />}></Route>
          <Route path='/navbarthree' element={<NavbarThree />}></Route>
         
          </Routes>
    </div>
  );
}

export default App;
