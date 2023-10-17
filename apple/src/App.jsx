import { Route, Routes } from "react-router-dom";
import Store from "./Mainpage/Store";
import Homepage from "./Mainpage/Homepage";
import Slidebar from './Mainpage/Slidebar';
import Registration from "./Mainpage/Registration";
import Signin from "./Mainpage/Signin";
function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Homepage/>} />
        <Route exact path='/store' element={<Store/>} />
        <Route exact path='/slidebar' element={<Slidebar/>} /> */}
        {/* <Route exact path="/" element={<Registration/>} /> */}
        <Route exact path="/" element={<Signin/>} />
      </Routes>
    </div>
  );
}

export default App;
