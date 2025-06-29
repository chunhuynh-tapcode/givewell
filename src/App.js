import Header from "./components/Layouts/Header";
import Overlay from "./components/Layouts/Overlay"
import OurMission from "./components/Layouts/OurMission";
import Empower from "./components/Layouts/Empower";
import OurTeam from "./components/Layouts/OurTeam";
import OurVision from "./components/Layouts/OurVision";
import OurImpact from "./components/Layouts/OurImpact";
import Footer from "./components/Layouts/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <Overlay />
        <OurMission />
        <Empower />
        <OurTeam />
        <OurVision />
        <OurImpact />
        <Footer />
      </div>
  );
}


export default App;
