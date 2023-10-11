import {Route,Routes} from "react-router-dom";
import Signup from './Components/Signup'
import Login from "./Components/Login";
import User from "./Components/User";
import Success from "./Components/Success";
import './App.css'

const App=()=>{
    return(
      <div className="App">
        <Routes>
            <Route path="/" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/info/:jobId" element={<Success/>}></Route>
        </Routes>
      </div>
    )
}
export default App;






/*import './App.css';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
       <AllRoutes/>
    </div>
  );
}

export default App;*/