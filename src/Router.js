import { BrowserRouter, Route } from "react-router-dom";

//importing pages
import Home from "./pages/Home"
import Chart from "./pages/Chart";
import Table from "./pages/Table";


//importing components
import Navbar from "./components/Navbar";

function Router() {

  return (
    <BrowserRouter>
      <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/table" component={Table} />
    
      </BrowserRouter>
  );
}

export default Router;
