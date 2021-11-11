import React from 'react'
import './App.css';
import RouterLogin from './routers/RouterLogin';
import { BrowserRouter } from 'react-router-dom'
function App() {
 

  return (
    <BrowserRouter>
      <div>
        {/* { value.show && <Register onClick={value.showFalse}/>} */}
      
        {/* { value.success ? 
                <Route path="/login" element={<Profile />} />
                :
                <Route path="/*" element={<Formlogin onShow={value.onShow} />} exact/>
            } */} 
        <RouterLogin />
        {/* <Routes>
          <Route path="/" element={<Formlogin />} exact/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Profile />} />
        </Routes> */}
      </div>
    </BrowserRouter>
  )
}

export default App;
