import { Header } from "./components/Header";
import { Services } from "./components/Services";

function App() {

  return (
    <div className="font-montserrat">
      <header className="bg-gradient-to-tr md:bg-gradient-to-r from-purple-300 to-purple-900 ">
        <Header />
      </header>
      <Services />
    </div>
    
    
  )
}

export default App
