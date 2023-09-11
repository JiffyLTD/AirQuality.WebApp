import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Router/AllRoutes";
import Header from "./Components/Header/Header";
import { Container } from "react-bootstrap";


function App() {
  return (
    <div>
      <Header/>
      <Container>
        <BrowserRouter>
            <AllRoutes/>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
