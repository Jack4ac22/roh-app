"use client";
import classes from "./simple-nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SimpleNavigationBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className={`container-fluid ${classes.nav_item}`}>
          <Link
            className={`navbar-brand ${
              pathname == "/" || pathname == "" ? classes.active : ""
            }`}
            href="/"
          >
            Work With Us
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className={`navbar-nav ${classes.nav_item}`}>
              <li className={`nav-item`} key="quiz">
                <Link
                  className={`nav-link ${
                    pathname == "/collaborate/quiz" ? classes.active : ""
                  }`}
                  aria-current="page"
                  href="/quiz"
                >
                  Quiz
                </Link>
              </li>
              <li className="nav-item" key="new-quiz">
                <Link
                  className={`nav-link ${
                    pathname == "/collaborate/new-quiz" ? classes.active : ""
                  }`}
                  href="/new-quiz"
                >
                  New
                </Link>
              </li>
              <li className="nav-item" key="edit-quiz">
                <Link
                  className={`nav-link ${
                    pathname.startsWith("/collaborate/edit")
                      ? classes.active
                      : ""
                  }`}
                  href="/edit"
                >
                  Edit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
