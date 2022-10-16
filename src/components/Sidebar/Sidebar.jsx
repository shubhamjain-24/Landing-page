import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <div className="logo-image"></div>
        <div className="logo-text">Logo</div>
      </div>
      <div className="menu-section">
        <div className="menu-svg">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="menu-text">Hide Menu</div>
      </div>
      <div className="menu-items">
        <div className="items">
          <div className="item-logo">
            <span class="material-symbols-outlined">speed</span>
          </div>
          <div className="item-text">Dashboard</div>
        </div>
        <div className="items active">
          <div className="item-logo active-logo">
            <span class="material-symbols-outlined">work</span>
          </div>
          <div className="item-text active-text">Projects</div>
        </div>
        <div className="items">
          <div className="item-logo">
            <span class="material-symbols-outlined">move_to_inbox</span>
          </div>
          <div className="item-text">Earnings</div>
        </div>
        <div className="items">
          <div className="item-logo">
            <span class="material-symbols-outlined">settings</span>
          </div>
          <div className="item-text">Profile</div>
        </div>
      </div>
      <p className="support-text">Support</p>
      <div className="ticket-container">
        <div className="ticket-logo">
        <i class="fa-solid fa-ticket"></i>
        </div>
        <div className="ticket-text">Tickets</div>
        <div className="ticket-number-container">
        <span className="ticket-numbers">5</span>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
