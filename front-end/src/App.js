import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageScreen from "./screens/HomePageScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
//import {useHistory} from "react-router-dom";

function App() {
  // const history = useHistory();

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route exact path='/' element={<HomePageScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
