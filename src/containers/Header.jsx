import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="logo" id="logo">
        <a href="/homepage">
          <img src="/logosr.png" width="174" height="81" alt="Vtrade logo" />
        </a>
      </div>
      <div id="navigation">
        <div className="nav_left_bg"></div>

        <ul>
          <li className="activate">
            <a href="index.html" previewlistener="true">
              Home
            </a>
          </li>

          <li>
            <a href="about_us.html" previewlistener="true">
              About Us
            </a>
          </li>

          <li>
            <a href="our_vision.html" previewlistener="true">
              Our Vision
            </a>
          </li>

          <li>
            <a href="our_mision.html" previewlistener="true">
              Our Mission
            </a>
          </li>

          <li>
            <a href="milestone.html" previewlistener="true">
              Milestones
            </a>
          </li>

          <li>
            <a href="alliances.html" previewlistener="true">
              Alliances
            </a>
          </li>

          <div class="space"></div>

          <li>
            <a href="business_division.html" previewlistener="true">
              Business Divisions
            </a>
          </li>

          <li class="right_space">
            <a href="product.html" previewlistener="true">
              Products
            </a>
          </li>

          <li class="right_space">
            <a href="industries.html" previewlistener="true">
              Industries
            </a>
          </li>

          <li class="right_space">
            <a href="clients.html" previewlistener="true">
              Clients
            </a>
          </li>

          <li class="right_space">
            <a href="contact_us.html" previewlistener="true">
              Contact Us
            </a>
          </li>
        </ul>

        <div class="clear"></div>
      </div>
    </div>
  );
};

export default Header;
