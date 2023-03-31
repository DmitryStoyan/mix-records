import { AboutUs } from "./components/about-us/About-us";
import { Examples } from "./components/examples/examples";
import { Header } from "./components/header/Header";
import { Price } from "./components/price/Price";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Price />
      <Examples />
    </div>
  );
}

export default App;
