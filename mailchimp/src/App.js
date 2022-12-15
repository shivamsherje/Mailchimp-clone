import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/Homepage/MainPage";
import Footer from "./components/Footer/Footer.tsx";
import Products from "./pages/Products/Products";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
