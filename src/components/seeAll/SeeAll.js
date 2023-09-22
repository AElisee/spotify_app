import "./seeAll.scss";
import { NavLink } from "react-router-dom";

const SeeAll = ({ pageLink }) => {
  return (
    <div className="see-all">
      <NavLink to={pageLink}>Tout afficher</NavLink>
    </div>
  );
};

export default SeeAll;
