import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import HowWeHelp from "./pages/HowWeHelp";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/how-we-help",
  //   element: <HowWeHelp />,
  // },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
