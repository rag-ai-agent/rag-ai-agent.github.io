import React from "react";

const Tutorial1 = ({ useYouTube = true }) => {
  return (
    <div className="container">
      <h2>Tutorial 1</h2>

      {/* Video Player */}
      <div className="video-container">
      {useYouTube ? (
          <iframe
            width = "100%"
            height = "400"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/tdNwrQvXzE0"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <video width="100%" height="auto" controls>
            <source src="/Tutorial1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>Sample Code</h3>
        <textarea
          className="code-box"
          readOnly
          value={`import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI()

def chat(prompt):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a funny assistant who likes to make jokes."},
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content.strip()

if __name__ == "__main__":
    print("\\nHello! I am a funny yet assistive chatbot! Press Q and hit enter to quit.\\n")
    while True:
        user = input()
        if user == "Q":
            break

        response = chat(user)
        print('\\n"',response,'"\\n')`}
        />
      </div>

      {/* General Information Text Box */}
      <div className="info-text">
        <h3>General Info</h3>
        <p>
          This tutorial covers the basics of making an AI chatbot using OpenAI's API Services
        </p>
      </div>
    </div>
  );
};

export default Tutorial1;
