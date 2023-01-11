import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <h1>CARS</h1>
      <ul>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
};
