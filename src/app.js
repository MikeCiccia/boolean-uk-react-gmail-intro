import "./styles/app.css";
import Header from "./header.js";
import Main from "./main.js";
import Nav from "./nav.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
