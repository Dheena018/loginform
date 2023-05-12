
import './App.css';
import BasicForms from './components/Basicforms/basicforms';
import Login from './components/login/login';
import SignUp from './components/signup/signup';

function App() {
  return (
    <div className="App">
      {/* <BasicForms /> */}
          <Login />
          <SignUp />
    </div>
  );
}

export default App;
