
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import ShopAI from "./components/ShopAI";
import Legacy from "./components/Legacy"



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<ShopAI/>}/>
        <Route path="/legacy" element={<Legacy/>}/>
       

      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
