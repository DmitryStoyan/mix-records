import { Header } from "./components/header/Header";
import { AboutUs } from "./components/about-us/About-us";
import { Certificate } from "./components/certificate/certificate";
import { Examples } from "./components/examples/examples";
import { Price } from "./components/price/Price";
import { Location } from "./components/location/location";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Price />
      <Examples />
      <Certificate />
      <Location />
    </div>
  );
}

export default App;
