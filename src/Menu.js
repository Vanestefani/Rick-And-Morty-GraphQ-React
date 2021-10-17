import "./menu.css";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">Wiki | The Rick and Morty</div>

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
