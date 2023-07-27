import React from "react";
import "./ScrollButton.css";
import { useEffect, useState } from "react";
function ScrollButton() {
  const [scrollButton, setScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollButton(true);
      } else {
        setScrollButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="to-top">
      <button onClick={scrollUp} className="btm">
        Back to top
      </button>
    </div>
  );
}

export default ScrollButton;
