import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUS from "./containers/ContactUS";
import Post from "./containers/Post";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact-us" component={ContactUS} />
          <Route path="/post/:slug" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
