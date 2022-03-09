import React from "react";
import Link from "next/link";

const Header = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light p-2">
      <Link href="/">
        <a className="navbar-brand">GitTix</a>
      </Link>

      <div className="d-flex justify-content-end p-2">
        <ul className="nav d-flex align-items-center">
          {currentUser ? "Sign out" : "Sign in/up"}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
