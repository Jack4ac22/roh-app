"use client";
import { useEffect, useState } from "react";
import NavButton from "./nav-bar-elements/nav-button";
import NavList from "./nav-bar-elements/nav-list";

export default function Mobile() {
  const [menueShow, setMenuShow] = useState(false);
  function handleClickButon() {
    setMenuShow(!menueShow);
  }
  return (
    <>
      <nav>
        <NavButton />
        <div className={"container d-block d-lg-none d-md-none"}>
          <div className="row">
            <div className="col-2">
              <button onClick={handleClickButon} className="btn btn-primary">
                Menu
              </button>
            </div>
            {menueShow && <NavList />}
          </div>
        </div>
      </nav>
    </>
  );
}
