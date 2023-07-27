import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link href="/" className="nav-item is-active" active-color="orange">
        Home
      </Link>
      <Link href="/cv" className="nav-item" active-color="green">
        CV
      </Link>
      <Link href="/projects" className="nav-item" active-color="blue">
        Projects
      </Link>
      <Link href="/contact" className="nav-item" active-color="rebeccapurple">
        Contact
      </Link>
      <span className="nav-indicator"></span>
    </nav>
  );
};

export default Navbar;
