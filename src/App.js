import AddProperty from "./components/AddProperty/AddProperty";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/Signin';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Signin />} />

          <Route path='/add-property' element={<PrivateRouter><AddProperty /></PrivateRouter>} />

          <Route path='/signup' element={<SignUp />} />

          <Route path='/dashboard' element={<PrivateRouter> <Dashboard /> </PrivateRouter>} />

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
