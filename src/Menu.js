import "./menu.css";
import { Link, NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">Wiki | The Rick and Morty</div>

          <ul>
            <Link to="/character" className="link-a">
              <li>
                <i class="fas fa-users"></i> Characters
              </li>{" "}
            </Link>
            <Link to="/places" className="link-a">
              <li>
                <i class="fa-solid fa-earth-africa"></i>Places
              </li>
            </Link>
            <Link to="/episodes" className="link-a">
              <li>
                <i class="fa-solid fa-tv"></i>Episodes
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
