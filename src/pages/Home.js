// src/pages/Home.js

import React from "react";
import "./Home.css"; // We'll define some prettier styling here

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>OpenAI-RAG-tutorial</h1>
        <p>
          Learn to make custom AI solutions using your own knowledge base!
        </p>
        <p>Created by Conor Brown, Tyler Morris, and Dr. Xiaopeng Zhao of the University of Tennessee, Knoxville</p>
      </div>

      {/* Introduction */}
      <section className="introduction">
        <h2>Introduction</h2>
        <p>
        Hello and welcome! This is a three-stage tutorial to educate how to 
        effectively implement Retrieval Augmented Generation (RAG) using 
        OpenAI, Pinecone, and Langchain.
        </p>
      </section>

      {/* General Rundown (Outline) */}
      <section className="outline">
        <h2>General Rundown</h2>
        <ol>
        The three parts of this tutorial include:
          <li>Building an AI Chatbot</li>
          <li>Embedding PDFs into a vector space</li>
          <li>Building a simple RAG application</li>
          Each of the folders labeled parts 1-3 each have a respective 
          tutorial video to follow along.
        </ol>
      </section>
      
      {/* Contact Info Section */}
      <section className="contacts">
        <h2>Contact Information</h2>
        <div className="contact-grid">
          <div className="contact-box">
            <h3>Conor Brown</h3>
            <p>Email: cbrow215@vols.utk.edu</p>
            <p>Phone: (615) 339-3024</p>
            <p>Role: Developer</p>
          </div>
          <div className="contact-box">
            <h3>Tyler Morris</h3>
            <p>Email: tmorri35@vols.utk.edu</p>
            <p>Role: Designer</p>
          </div>
          <div className="contact-box">
            <h3>Dr. Xiaopeng Zhao</h3>
            <p>Email: xzhao9@utk.edu</p>
            <p>Role: Project Manager</p>
          </div>
        </div>
      </section>

      {/* Links to GitHub & YouTube */}
      <section className="links">
        <h2>Additional Resources</h2>

        <p>Check out our GitHub for source code examples:</p>
        <a
          href="https://github.com/cojobro/OpenAI-RAG-tutorial"
          target="_blank"
          rel="noopener noreferrer"
          className="button-link"
        >
          View GitHub
        </a>

        <p>Explore our YouTube playlist for video tutorials:</p>
        <a
          href="https://youtube.com/playlist?list=PLNO0jfBLHI5DfYJDI_Vr-hRcwy8X8SwS6&si=9_GWtdCH2lzml6o7"
          target="_blank"
          rel="noopener noreferrer"
          className="button-link"
        >
          YouTube Playlist
        </a>
      </section>
    </div>
  );
};

export default Home;
