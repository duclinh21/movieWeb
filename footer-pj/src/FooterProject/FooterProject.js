import React from "react";
import "./FooterProject.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";

const FooterProject = () => {
  return (
    <div className="container">
      <div className="left-element">
        <h1>
          Our platform is trusted
          <br /> by millions &features
          <br /> best updated movies <br />
          all around the world.
        </h1>
        <div className="support">
          <ul>
            <a href="#">
              <li>Privacy policy</li>
            </a>
            <a href="#">
              <li>Term of service</li>
            </a>
            <a href="#">
              <li>Language</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="right-element">
        <div className="navigation">
          <ul>
            <a href="#">
              <li>Home /</li>
            </a>
            <a href="#">
              <li>Discover /</li>
            </a>
            <a href="#">
              <li>Influence /</li>
            </a>
            <a href="#">
              <li>Release</li>
            </a>
          </ul>
        </div>
        <div className="social">
          <a href="#">
            <FaFacebookSquare size="40" className="fb" />
          </a>
          <a href="#">
            <FaInstagramSquare size="40" className="ig" />
          </a>
          <a href="#">
            <FaTwitterSquare size="40" className="tw" />
          </a>
          <a href="#">
            <AiFillGoogleSquare size="40" className="gg" />
          </a>
        </div>
        <h2>© 2023</h2>
      </div>
    </div>
  );
};

export default FooterProject;
