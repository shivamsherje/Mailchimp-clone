import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/Homepage/MainPage";
import Footer from "./components/Footer/Footer.tsx";
import Integrations from "./pages/Homepage/integrations";
import Main from "./pages/CyberDomain - 101/Main";
// import Products from "./pages/Products/Products";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <MainPage />
      <Integrations/>
      <Products />
      <Footer /> */}
      <Main />
    </div>
  );
}

export default App;
