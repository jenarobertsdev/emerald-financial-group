import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import HowWeHelp from "./pages/HowWeHelp";
import Contact from "./pages/Contact";
import OurProcess from "./pages/OurProcess";
import FAQs from "./pages/FAQs";
import AboutKarenRoberts from "./pages/AboutKarenRoberts";
import BrokerCheck from "./components/BrokerCheck";

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
  {
    path: "/our-process",
    element: <OurProcess />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
  },
  {
    path: "/about-karen-roberts",
    element: <AboutKarenRoberts />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <BrokerCheck />
    </>
  );
}

export default App;
