import React from "react";
import CodeSnippet from "../components/CodeSnippet";
import "./Tutorial.css"; // We'll define some new CSS here for the code box & copy button

const Tutorial1 = ({ useYouTube = true }) => {

  const code1 = `python -m venv ai`;

  const code2 = `vir\\Scripts\\activate.bat`;

  const code3 = `source my_env/bin/activate`;

  const code4 = `openai==1.52.0
python-dotenv==1.0.1`;

  const code5 = `pip install -r requirements.txt`;

  const code6 = `OPENAI_API_KEY="YOUR API KEY HERE"`;

  const code7 = `import os
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
        print('\\n"',response,'"\\n')`;

        const code8 = `import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI()

# converstaion variable added to store conversational memory
conversation = [
            {"role": "system", "content": "You are a funny assistant who likes to make jokes."},
        ]

def chat(prompt):
    conversation.append({"role": "user", "content": prompt})
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages = conversation   # changed to converstation variable
    )
    
    ai_response = response.choices[0].message.content.strip()
    conversation.append({"role": "assistant", "content": ai_response})
    
    return ai_response

if __name__ == "__main__":
    print("\\nHello! I am a funny yet assistive chatbot! Press Q and hit enter to quit.\\n")
    while True:
        user = input()
        if user == "Q":
            break

        response = chat(user)
        print('\\n"',response,'"\\n')`;

        const code9 = `import os
import tkinter as tk
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI()

conversation = [
            {"role": "system", "content": "You are a funny assistant who likes to make jokes."},
        ]

def chat(prompt):
    conversation.append({"role": "user", "content": prompt})
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages = conversation
    )
    
    ai_response = response.choices[0].message.content.strip()
    conversation.append({"role": "assistant", "content": ai_response})
    
    return ai_response

class ScrollableFrame(tk.Frame):
    def __init__(self, container, *args, **kwargs):
        super().__init__(container, *args, **kwargs)
        self.canvas = tk.Canvas(self)
        scrollbar = tk.Scrollbar(self, orient="vertical", command=self.canvas.yview)
        self.scrollable_frame = tk.Frame(self.canvas)
    
        self.scrollable_frame.bind(
            "<Configure>",
            lambda e: self.canvas.configure(
                scrollregion=self.canvas.bbox("all")
            )
        )
    
        self.canvas.create_window((0, 0), window=self.scrollable_frame, anchor="nw")
    
        self.canvas.configure(yscrollcommand=scrollbar.set)
    
        self.canvas.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")


window = tk.Tk()
window.title("Simple Chatbot")
window.geometry("400x500")


conversation_frame = ScrollableFrame(window)
conversation_frame.pack(fill=tk.BOTH, expand=True)


def add_message(text, sender):
    msg_frame = tk.Frame(conversation_frame.scrollable_frame)
    if sender == 'user':
        msg_label = tk.Label(
            msg_frame, text=text, bg="#DCF8C6", wraplength=375,
            justify='left', anchor='e', padx=5, pady=5
        )
        msg_label.pack(anchor='e')
    else:
        msg_label = tk.Label(
            msg_frame, text=text, bg="#FFFFFF", wraplength=375,
            justify='left', anchor='w', padx=5, pady=5
        )
        msg_label.pack(anchor='w')
    msg_frame.pack(fill=tk.X)
    conversation_frame.canvas.update_idletasks()
    conversation_frame.canvas.yview_moveto(1)

def send_message(event=None):
    user_input = message_entry.get()
    if user_input.strip() == '':
        return
    add_message(user_input, 'user')
    response = chat(user_input)
    add_message(str(response), 'bot')
    message_entry.delete(0, tk.END)

input_frame = tk.Frame(window)
input_frame.pack(side=tk.BOTTOM, fill=tk.X)

message_entry = tk.Entry(input_frame)
message_entry.pack(side=tk.LEFT, fill=tk.X, expand=True)
message_entry.bind("<Return>", send_message)

send_button = tk.Button(input_frame, text="Send", command=send_message)
send_button.pack(side=tk.RIGHT)

window.mainloop()`;

  return (
    <div className="container">
      <h2>Tutorial 1 - Creating an AI Chatbot</h2>
      <br></br>
      {/* General Information Text Box */}
      <div className="info-text">
        <h3>General Info</h3>
        <p>
          This tutorial covers the basics of making an AI chatbot using OpenAI's API Services. After this tutorial you will be able to make your own working chatbot. You will also familiarize the concepts of, virtual environments, environment variables, API calling, role assignment, making a chatbot with and without memory, and building simple applications. You can follow along with the following video or through the written tutorial below.
        </p>
      </div>
      <br></br>

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
      <br></br>
      {/* General Information Text Box */}
      <div className="info-text">
        <h2>Create an virtual environment, and install the requirered packages</h2>
        <p>
          We'll start by creating a virtual environment for our project to live in. Virtual environments in Python isolate project dependencies and avoid conflicts between different projects, ensuring consistent environments and easier maintenance. Additionally, using a requirements.txt file is considered a best practice because it provides a clear record of all required packages, making setups reproducible and collaboration smoother. To create and activate the virtual environment, enter the following into your terminal.
        </p>
        <br></br>
        <p>P.S. The virtual environment is named ai in this tutorial, but you can use any name you want.</p>
      </div>
      
      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>Create a virtual environment</h3>
        <CodeSnippet codeText={code1} />
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>To activate for Windows</h3>
        <CodeSnippet codeText={code2} />
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>To activate for Mac</h3>
        <CodeSnippet codeText={code3} />
      </div>

      {/* General Information Text Box */}
      <div className="info-text">
        <h2>Create a requirements.txt file and install the requirements</h2>
        <p>
          This requirements file may be small at the moment, but as you work on larger projects with more dependencies, you will find it to be an invaluable component to your projects that will enable you to control which versions of dependencies you use. It will also make tracking which libraries need to be installed to replicate your project. Start by creating a file called requirements.txt in your root folder and putting the following requirements in it. You can then easily install all the required components into your virtual environment by running the following command in your terminal.
        </p>
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>requirements.txt</h3>
        <CodeSnippet codeText={code4} />
      </div>

      <div className="info-text">
        <p>
          You can then easily install all the required components into your virtual environment by running the following command in your terminal.
        </p>
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>Install Requirements</h3>
        <CodeSnippet codeText={code5} />
      </div>

      {/* General Information Text Box */}
      <div className="info-text">
        <h2>Store your API key in an environment variable and Build your chatbot!</h2>
        <p>
        A .env file is commonly used to store environment variables such as API keys, database credentials, or other sensitive configuration details. By keeping these values separate from the source code, you maintain security and flexibility. This approach also makes it straightforward to switch between different environments (e.g., development, testing, production) without modifying your codebase. Create a file in your root directory named .env and copy the following code into it. You are going to need to replace "YOUR API KEY HERE" with your own API key which you can get from <a href="https://platform.openai.com/settings/organization/api-keys">OpenAI</a>
        </p>
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>.env</h3>
        <CodeSnippet codeText={code6} />
      </div>

      {/* General Information Text Box */}
      <div className="info-text">
        <p>
        Now, to make your chatbot, copy the following code into a file in your root directory. This code snippet demonstrates how to use environment variables and the OpenAI client to build a simple, joke-loving chatbot. By loading credentials from the .env file, the script creates a chat function that sends user input to a humorous GPT-4–like model. It then prints back witty responses in real-time until the user decides to quit. However, the chatbot has no memory.
        </p>
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>chatbot.py</h3>
        <CodeSnippet codeText={code7} />
      </div>

      {/* General Information Text Box */}
      <div className="info-text">
        <p>
        To add memory we just have to make a simple change to the code, creating a list that can store memory of the previous chats.
        </p>
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>memory_chat.py</h3>
        <CodeSnippet codeText={code8} />
      </div>

      {/* General Information Text Box */}
      <div className="info-text">
        <h2>Make an app with a UI</h2>
        <p>
        Now that we have the working code for a chatbot we can now deploy this method into an app that is user friendly. The following code uses a basic tkinter user interface. Feel free to toy around with it or try implementing this chatbot into your own applications!
        </p>
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>ui_chatbot.py</h3>
        <CodeSnippet codeText={code9} />
      </div>

    </div>
  );
};

export default Tutorial1;
