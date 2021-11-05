import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from "./components/searchbar"
import Navbar from "./components/navbar"
import Header from "./components/header"
import Threecard from "./components/threecard";
import Twocard from "./components/twocard";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Navbar />
      <Header />
      <Threecard />
      <Twocard />
      <Threecard />
      <Footer />
    </div>
  );
}

export default App;
