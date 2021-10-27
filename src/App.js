import Register from './components/Register';
import Form from './components/Form';
import Formlogin from './components/Formlogin';
import './App.css';
import { useState } from "react";

function App() {
  // const [ show, setShow ] = useState(false)
  const [sign, setSign] = useState(true)
  return (
    <div>
      {/* { show && 
        <Form 
          title="Form Đăng nhập"
        />
      }
      <button onClick={() => setShow(!show)} > Click show </button> */}

      {sign && <Formlogin showWeb={() => setSign(false)} /> || <Register />}

    </div>
  );
}

export default App;
