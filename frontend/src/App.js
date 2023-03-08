import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
