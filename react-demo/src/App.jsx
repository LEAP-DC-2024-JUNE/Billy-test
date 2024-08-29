import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to={"/about"}>Go to about page</Link>
      <div>Home page</div>
    </div>
  );
}

export default App;
