import Form from './components/Form';
import Formlogin from './components/Formlogin';
import './App.css';
import { useState } from "react";

function App() {
  // const [ show, setShow ] = useState(false)

  return (
    <div>
      {/* { show && 
        <Form 
          title="Form Đăng nhập"
        />
      }
      <button onClick={() => setShow(!show)} > Click show </button> */}

      <Formlogin />

    </div>
  );
}

export default App;
