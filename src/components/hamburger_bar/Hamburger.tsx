import "./hamburgerBar.css";
import React from "react";

interface HamburgerType {
  getOpenClassFun: (value: string) => void;
}

const Hamburger: React.FC<HamburgerType> = (props) => {
  const [openClass, setOpenClass] = React.useState("");

  function onClickHandler() {
    if (openClass.length == 0) {
      setOpenClass(() => "hamburger-button--open");

      props.getOpenClassFun("open");
    } else {
      setOpenClass(() => "");
      props.getOpenClassFun("");
    }
  }

  return (
    <button
      className={`hamburger-button ${openClass}`}
      id="hamburger-button"
      onClick={onClickHandler}
    >
      <div className="hamburger-button__bar"></div>
      <div className="hamburger-button__bar"></div>
      <div className="hamburger-button__bar"></div>
    </button>
  );
};

export default Hamburger;
