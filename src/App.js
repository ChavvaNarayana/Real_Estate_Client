import AddProperty from "./components/AddProperty/AddProperty";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import IndexPage from './components/IndexPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<IndexPage />} /> */}
          <Route path='/' element={<AddProperty />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
