import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Themes from "./Components/Themes/Themes";

function App() {

  return (
    <div
      className="h-auto w-full overflow-hidden bg-contain bg-center"
      style={{ backgroundImage: "url('/Screenshot.png')" }}
    >
          <Navbar/>
          <Home/>
          <About/>
          <Themes/>

    </div>
  )
}

export default App
