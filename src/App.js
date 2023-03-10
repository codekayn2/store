import {
  BrowserRouter as Routes,
  Route,
} from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={ store }>
      <Routes>
        <div className="App">
          <Header />
              <Route exact path="/order">
                <OrderPage />
              </Route>
              <Route exact path="/app/:title">
                <GamePage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
            </div>
      </Routes>
    </Provider>
  );
}

export default App;
