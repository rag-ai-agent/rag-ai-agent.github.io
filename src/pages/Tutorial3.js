import React from "react";
import CodeSnippet from "../components/CodeSnippet";
import "./Tutorial.css"; // We'll define some new CSS here for the code box & copy button

const Tutorial3 = ({ useYouTube = true }) => {
  
  const code1 = `python -m venv ai`;

  const code2 = `vir\\Scripts\\activate.bat`;

  const code3 = `source my_env/bin/activate`;

  const code4 = `python-dotenv
langchain
langchain-community
openai
pinecone-client[grpc]
langchain-openai==0.2.3
langchain-pinecone==0.2.0`;

  const code5 = `pip install -r requirements.txt`;

  const code6 = `OPENAI_API_KEY="YOUR API KEY HERE"

PINECONE_API_KEY="YOUR API KEY HERE"

PINECONE_INDEX="index-name"    # Must be the same name as the index you created in part 2 of the tutorial`;

  const code7 = `import os
from dotenv import load_dotenv
from pinecone import Pinecone
from langchain_pinecone import PineconeVectorStore
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate


load_dotenv()

pc = Pinecone(api_key=os.environ.get("PINECONE_API_KEY"))

index_name = os.environ.get("PINECONE_INDEX")  

index = pc.Index(index_name)
vector_store = PineconeVectorStore(index=index, embedding=OpenAIEmbeddings(model="text-embedding-3-small"))

retriever = vector_store.as_retriever()

llm = ChatOpenAI(model="gpt-4o-mini")

temp_prompt = (
    "You are an assistant for question-answering tasks. Use the following pieces of retrieved context to answer the question. If the answer is not provided in the context, tell the user that you do not have the context required to know the answer.\n\n"
    "Context: {context}\n\n"
    )

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", temp_prompt),
        ("human", "{input}"),
    ]
)
#if you want to bring the list out of the prompt to update conversational memory, "system" is role of the model, "human" is user input, and "ai" is response of model

question_answer_chain = create_stuff_documents_chain(llm, prompt)
rag_chain = create_retrieval_chain(retriever, question_answer_chain)

query = "Who were Romulus and Remus?"     # you can specialize this query to your own documents.

response = rag_chain.invoke({"input":query})
print(response["answer"])`;

  return (
    <div className="container">
      <h2>Tutorial 3 - Building a RAG AI-Agent</h2>

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
            src="https://www.youtube.com/embed/GXenWKu03to"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <video width="100%" height="auto" controls>
            <source src="/Tutorial2.mp4" type="video/mp4" />
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
        A .env file is commonly used to store environment variables such as API keys, database credentials, or other sensitive configuration details. By keeping these values separate from the source code, you maintain security and flexibility. This approach also makes it straightforward to switch between different environments (e.g., development, testing, production) without modifying your codebase. Create a file in your root directory named .env and copy the following code into it. You are going to need to replace "YOUR API KEY HERE" with your own API key which you can get from <a href="https://login.pinecone.io/login?state=hKFo2SB1SGxhWTZwNVNNNVcyZF9zb1haVU0xWkh6TWF1NW1Ld6FupWxvZ2luo3RpZNkgS1Z2cnh5RFF6bk5FdTdyQm8tdkdkT29xSzB5WG5iemujY2lk2SBUOEkyaEc2Q2FaazUwT05McWhmN3h6a1I0WmhMcVM0Qw&client=T8I2hG6CaZk50ONLqhf7xzkR4ZhLqS4C&protocol=oauth2&audience=https%3A%2F%2Fus-central1-production-console.cloudfunctions.net%2Fapi%2Fv1&scope=openid%20profile%20email%20read%3Acurrent_user&redirect_uri=https%3A%2F%2Fapp.pinecone.io&sessionType=signup&response_type=code&response_mode=query&nonce=NW8wMC13OXlaRjlDNXNfSWxtWVZtdTVIYkFuRS4tV2o5dk8xSVAuck5NQQ%3D%3D&code_challenge=3eV-pnh-LqR6sJBDUgT9Uwhhx1f5AbpfMCdgZhYyU5Y&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4xMi4xIn0%3D">Pinecone</a>
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

    </div>
  );
};

export default Tutorial3;
