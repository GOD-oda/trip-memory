import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Top from './page/Top';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Top/>}/>
        <Route path={'/home'} element={<Home/>}/>
      </Routes>
      Foo
    </BrowserRouter>
  );
}

export default App;