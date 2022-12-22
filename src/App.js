import AddProperty from "./components/AddProperty/AddProperty";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import IndexPage from "./components/IndexPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <IndexPage /> } />
          <Route path='/add' element={ <AddProperty /> } /> 
          <Route path="/login" element={ <Signin /> } />
          <Route path='/register' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
