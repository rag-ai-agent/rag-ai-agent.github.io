import React from "react";

const Tutorial3 = ({ useYouTube = true }) => {
  return (
    <div className="container">
      <h2>Tutorial 3</h2>

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
            <source src="/Tutorial3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="text-area">
        <h3>Sample Code</h3>
        <textarea
          className="code-box"
          readOnly
          value={`import os
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
    "You are an assistant for question-answering tasks. Use the following pieces of retrieved context to answer the question. If the answer is not provided in the context, tell the user that you do not have the context required to know the answer.\\n\\n"
    "Context: {context}\\n\\n"
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

query = "What did the gladiators do?"

response = rag_chain.invoke({"input":query})
print(response["answer"])`}
        />
      </div>

      <div className="info-text">
        <h3>General Info</h3>
        <p>
          On this final step of the tutorial, we will make our own RAG AI-Agent which we can query info that we have previously stored in our vector database.
        </p>
      </div>
    </div>
  );
};

export default Tutorial3;
