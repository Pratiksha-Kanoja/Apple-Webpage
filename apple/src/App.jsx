import { Route, Routes } from "react-router-dom";
import Store from "./Mainpage/Store";
import Homepage from "./Mainpage/Homepage";
import Slidebar from './Mainpage/Slidebar';
import Registration from "./Mainpage/Registration";
import Signin from "./Mainpage/Signin";
import Apple15pro from "./Mainpage/Apple15pro";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route exact path='/store' element={<Store/>} />
        <Route exact path='/slidebar' element={<Slidebar/>} />
        {/* <Route exact path="/register" element={<Registration/>} />
        <Route exact path="/" element={<Signin/>} /> */}
        {/* <Route exact path="/iPhone15Pro" element={<Apple15pro/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
