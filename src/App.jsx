import { Toaster } from "./components/ui/sonner";
import "./App.css";
import { FooterComponent } from "./components/footer";
import { Home } from "./components/home-page";
import { ProjectsPage } from "./components/projects";
import { Navbar } from "./components/navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Wrapper = (props) => {
  return (
    <div className="flex flex-col w-full items-center bg-gradient">
      <Navbar />
      <Outlet />
      <FooterComponent />
      <Toaster />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />}>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
