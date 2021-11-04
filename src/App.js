import Register from './components/Register';
import Form from './components/Form';
import Formlogin from './components/Formlogin';
import Profile from './components/Profile';
import './App.css';
import { useContext } from "react";
import { LoginContext } from './context/LoginContext'
function App() {
 
  const value = useContext(LoginContext)

  return (
    <div>
      { value.show && <Register onClick={value.showFalse}/>}
      
      { value.success ? <Profile /> :
          <Formlogin onShow={value.onShow} onSuccess={value.onSuccess}/> 
      }
      
    </div>
  )
}

export default App;
