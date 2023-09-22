import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="hello">
        {/* Bonjour 👋 */ "Bienvenue dans notre univers musical ! 🎵"}
      </h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/favoris">
              <span
                className="a-left"
                style={{ backgroundColor: "#902743" }}
              ></span>{" "}
              <span className="a-right">Favoris</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/albums">
              <span
                className="a-left"
                style={{ backgroundColor: "#DCDCDC" }}
              ></span>
              <span className="a-right">Albums</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/artistes">
              <span
                className="a-left"
                style={{ backgroundColor: "#B260A0" }}
              ></span>
              <span className="a-right">Artistes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/episodes">
              <span
                className="a-left"
                style={{ backgroundColor: "#45A6B8" }}
              ></span>
              <span className="a-right">Episodes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/genres">
              <span
                className="a-left"
                style={{ backgroundColor: "#E28117" }}
              ></span>
              <span className="a-right">Genres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/playlists">
              <span
                className="a-left"
                style={{ backgroundColor: "#326869" }}
              ></span>
              <span className="a-right">Playlists</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/podcasts">
              <span
                className="a-left"
                style={{ backgroundColor: "#7E1D5E" }}
              ></span>
              <span className="a-right">Podcasts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tops-musiques">
              <span
                className="a-left"
                style={{ backgroundColor: "#5F2531" }}
              ></span>
              <span className="a-right">Tops musiques</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/titres">
              <span
                className="a-left"
                style={{ backgroundColor: "#FFA586" }}
              ></span>
              <span className="a-right">Titres</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
