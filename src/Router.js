import { BrowserRouter, Route } from "react-router-dom";

//importing pages
import Home from "./pages/Home"


//importing components
import Navbar from "./components/Navbar";

function Router() {

  return (
    <BrowserRouter>
      <Navbar />

          <Route exact path="/" component={Home} />
    
      </BrowserRouter>
  );
}

export default Router;
