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
        OpenAI, Pinecone, and Langchain. A Retrieval-Augmented Generation AI-agent combines large language model capabilities with a dedicated knowledge base, allowing it to fetch and incorporate relevant information in real-time. This approach leads to more accurate, context-rich answers, making it particularly useful for chatbots that need up-to-date or detailed domain knowledge. By blending retrieval and generation, RAG systems can both recall and reason, providing an enhanced user experience.
        </p>
      </section>

      {/* General Rundown (Outline) */}
      <section className="outline">
        <h2>General Rundown</h2>
        <ol>
          <li>Building an AI Chatbot</li>
            <ul>Discover how to set up a basic conversational agent, configure your environment, and manage necessary dependencies. You’ll learn about structuring prompts, handling user inputs, and returning meaningful AI-generated responses.</ul>
          <li>Embedding PDFs into a Pinecone vector space</li>
            <ul>Explore how to transform text from PDF documents into vector embeddings using Pinecone. By indexing and storing these embeddings, you’ll enable efficient similarity searches that can retrieve relevant sections of your documents in real-time.</ul>
          <li>Building a simple RAG application using Langchain</li>
            <ul>Learn how to combine language models with real-time retrieval capabilities. This step shows you how to build a Retrieval-Augmented Generation (RAG) system using LangChain, allowing your AI to reference stored knowledge and provide more accurate, context-aware responses.</ul>
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
            <p>Role: Project Developer/Designer</p>
          </div>
          <div className="contact-box">
            <h3>Tyler Morris</h3>
            <p>Email: tmorri35@vols.utk.edu</p>
            <p>Role: Project Designer</p>
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
