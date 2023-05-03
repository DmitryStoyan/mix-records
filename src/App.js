import { Header } from "./components/header/Header";
import { AboutUs } from "./components/about-us/About-us";
import { Certificate } from "./components/certificate/Certificate";
import { Examples } from "./components/examples/Examples";
import { Price } from "./components/price/Price";
import { Location } from "./components/location/Location";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Price />
      <Examples />
      <Certificate />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
