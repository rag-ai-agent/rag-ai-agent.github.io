import React from "react";
import CodeSnippet from "../components/CodeSnippet";
import "./Tutorial.css"; // We'll define some new CSS here for the code box & copy button

const Tutorial3 = ({ useYouTube = true }) => {
  
  const code1 = `python -m venv ai`;

  const code2 = `ai\\Scripts\\activate.bat`;

  const code3 = `source ai/bin/activate`;

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
          In this final stage of the tutorial, we will combine what we learned about making Chatbots in the first part of the tutorial and the vector database we created in the second part of this tutorial into a RAG AI system that will allow us to query the documents we have uploaded to the database.
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
        <h2>Create a new root directory and virtual environment</h2>
        <p>
          It is reccomended that you work from a new root directory for this project as the previous version of langchain community is incompatible with the langchain-openai and langchain-pinecone packages that we are using for this stage of the project. Once you have a new root directory set up, simply perform the same previous steps to set up and activate a new virtual environment. 
        </p>
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
          
        </p>
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>requirements.txt</h3>
        <CodeSnippet codeText={code4} />
      </div>

      <div className="info-text">
        <p>
          Run the following command in your terminal.
        </p>
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>Install Requirements</h3>
        <CodeSnippet codeText={code5} />
      </div>

      {/* General Information Text Box */}
      <div className="info-text">
        <h2>Create a new .env file and store your API Keys and target index</h2>
        <p>
        Now that you have everything set up your new .env file only needs to have the api keys for your OpenAI account and Pinecone account. Additionally, you need to add the name of the index you stored your vectorized documents in from the last step of the tutorial. Make sure the index name is spelled correctly otherwise your code will not work!
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
        You can now use the following code to create a Retrieval Augmented Generation (RAG) AI-agent. This AI-agent should be an expert on the documents you embedded earlier since through the process of RAG the AI is looking at relevant parts of the document you provided it to answer your question! This not only enables you to build highly specialized AI applications, but it also virtually eliminates hallucenations!
        </p>
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>rag_bot.py</h3>
        <CodeSnippet codeText={code7} />
      </div>

      {/* General Information Text Box */}
      <div className="info-text">
        <p>
        Congratulations! You have completed the tutorial. Feel free to modify the code for your own puroposes. You can also try to implement the RAG AI-agent into the ui_chatbot.py we built in the first part of the tutorial to test your mastery of topics covered in this tutorial. 
        </p>
        <br></br>
        <p>Good Luck and Happy Developing!</p>
      </div>

    </div>
  );
};

export default Tutorial3;
