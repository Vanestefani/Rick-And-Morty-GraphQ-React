import "./menu.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <header class="">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div className="logo ">
            <img src={logo} />
          </div>

          <ul>
            <Link to="/" className="link-a">
              <li>
                <i className="fas fa-users"></i> Characters
              </li>
            </Link>
            <Link to="/places" className="link-a">
              <li>
                <i className="fa-solid fa-earth-africa"></i>Places
              </li>
            </Link>
            <Link to="/episodes" className="link-a">
              <li>
                <i className="fa-solid fa-tv"></i>Episodes
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
