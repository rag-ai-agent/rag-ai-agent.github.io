// src/components/Navbar.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // We'll define some styles here

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tutorial1"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Tutorial 1 - Creating an AI Chatbot
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tutorial2"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Tutorial 2 - Embedding PDFs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tutorial3"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Tutorial 3 - Building a RAG AI-Agent
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
