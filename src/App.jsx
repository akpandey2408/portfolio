import { Toaster } from "./components/ui/sonner";
import "./App.css";
import { FooterComponent } from "./components/footer";
import { Home } from "./components/home-page";
import { ProjectsPage } from "./components/projects";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col w-full items-center bg-gradient">
      <Navbar/>
      <Home />
      <FooterComponent />
      
      <Toaster />
    </div>
  );
}

export default App;
