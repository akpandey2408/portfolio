import { Toaster } from "./components/ui/sonner";
import "./App.css";
import { FooterComponent } from "./components/footer";
import { Home } from "./components/home-page";

function App() {
  return (
    <div className="flex flex-col w-full items-center">
      <Home />
      <FooterComponent />
      
      <Toaster />
    </div>
  );
}

export default App;
