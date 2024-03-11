import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navigation
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          AboutMe
        </Link>,
        <Link key={2} className="nav-link text-light" to="/Contact">
          Contact
        </Link>,
        <Link key={2} className="nav-link text-light" to="/Portfolio">
        Portfolio
      </Link>,
      <Link key={2} className="nav-link text-light" to="/Resume">
      Resume
    </Link>,
      ]}
    />
  );
}
