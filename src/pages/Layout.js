import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/city">Summary</Link>
          </li>
          <li>
            <Link to="/city">City</Link>
          </li>
          <li>
            <Link to="/gender">Gender</Link>
          </li>
          <li>
            <Link to="/livingstatus">LivingStatus</Link>
          </li>
          <li>
            <Link to="/maritalstatus">MaritalStatus</Link>
          </li>
          <li>
            <Link to="/status">State</Link>
          </li>
          <li>
            <Link to="/time">Time</Link>
          </li>
          <li>
            <Link to="/year">Year</Link>
          </li>

          <li>
            <Link to="/notfound">NotFound</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
