import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.tsx";

import Allroutes from "./router/Allroutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes/>
      <Footer /> 
    </div>
  );
}

export default App;
