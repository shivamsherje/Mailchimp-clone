import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/Homepage/MainPage";
import Footer from "./components/Footer/Footer.tsx"
function App() {

  return (

    <div className="App">
      <Navbar/>
      <MainPage />
      <Footer/>
    </div>
  );
}

export default App;
