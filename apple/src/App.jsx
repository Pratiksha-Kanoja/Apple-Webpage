import { Route, Routes } from "react-router-dom";
import Store from "./Mainpage/Store";
import Homepage from "./Mainpage/Homepage";
import Slidebar from './Mainpage/Slidebar';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route exact path='/store' element={<Store/>} />
        <Route exact path='/slidebar' element={<Slidebar/>} />
      </Routes>
    </div>
  );
}

export default App;
