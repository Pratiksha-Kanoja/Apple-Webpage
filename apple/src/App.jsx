import { Route, Routes } from "react-router-dom";
import Store from "./Mainpage/Store";
import Homepage from "./Mainpage/Homepage";
import Registration from "./Mainpage/Registration";
import Signin from "./Mainpage/Signin";
import Apple15pro from "./Mainpage/Apple15pro";
import Bag from "./Mainpage/Bag";
import Applewatch from "./Mainpage/Applewatch";
import Watch_Singleproduct from "./Mainpage/Watch_Singleproduct";
// import Practice from "./Mainpage/Practice";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route exact path='/store' element={<Store/>} />
        <Route exact path="/iPhone15Pro" element={<Apple15pro/>} />
        <Route exact path="/register" element={<Registration/>} />
        
        <Route exact path="/bag" element={<Bag/>} />
        <Route exact path="/applewatch" element={<Applewatch/>} />

        <Route exact path="/applewatch/singlewatch/:id" element={<Watch_Singleproduct/>} />
        <Route exact path="/signin" element={<Signin/>} />

        {/* <Route exact path="/practice" element={<Practice/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
