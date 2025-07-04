import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  ButtonAppBar from "./Layout/Layout"
import TableContents from "./Pages/tableindex";
import Sidebar from "./Pages/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import About from "./Pages/About";
import Product1 from "./Pages/Product1";
import SidebarLayout from "./Pages/Sidebar";

import { Provider } from "react-redux"; 
import store from "./Pages/Redux/Store";
import Login from "./Pages/Login/Login";
import Product2 from "./Pages/Product2";
import ReduxPrac from "./Pages/ReduxPractice";
import NoNetwork from "./Layout/NoNetwork";
import Loader from "./Layout/Loader";

export default function App() {
  return ( 
    // <NoNetwork>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< ButtonAppBar />}>
        </Route>
        {/* sidebar used commonly starts  */}
           <Route path="/" element={<SidebarLayout/>}>
          <Route path="/dashboard" element={<Dashboard name="niv"/>} />
          <Route path="/table" element={<TableContents />} />
          <Route path="/about"  element={<About/>} />
          <Route path="/product1" element={<Product1/>} />
          <Route path="/product2" element={<Product2/>} />
          <Route path="/redux" element={<ReduxPrac/>} />
        </Route>
        {/* sidebar used commonly ends */}
      </Routes>     
    </BrowserRouter> 

  // </NoNetwork> 

  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}><App /></Provider>);


