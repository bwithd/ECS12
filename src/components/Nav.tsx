import { NavLink } from "react-router";

export function Nav() {
  return (
    <div className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-logo">ECS<span>12</span></div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="programme" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Programme
        </NavLink>
        <NavLink to="Contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Contact
        </NavLink>
        <NavLink to="people" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Speakers
        </NavLink>
        <NavLink to="location" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Venue
        </NavLink>
        <NavLink to="EDI" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          EDI
        </NavLink>
        <NavLink to="apply" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Register
        </NavLink>
      </div>
    </div>
  );
}
