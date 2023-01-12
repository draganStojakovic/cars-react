import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <h1>Navbar:</h1>
      <ul>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/submit/cars">Submit</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
};
