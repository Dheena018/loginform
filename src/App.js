
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
// import BasicForms from './components/Basicforms/basicforms';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Navbar from './pages/navbar';
function App() {

  // const currentUser = true;
  
  const {currentUser} = useContext(AuthContext)


  const RequireAuth = ({children})=>{
    return currentUser ? children : <Navigate to={"/signup"} />
  };
  console.log(currentUser);
  
  return (
    <div className="App">
      <Routes>
        
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/navbar' element={<Navbar />}></Route>
         
          </Routes>
    </div>
  );
}

export default App;
