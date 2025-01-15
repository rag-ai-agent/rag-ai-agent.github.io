import React from "react";
import CodeSnippet from "../components/CodeSnippet";
import "./Tutorial.css"; // We'll define some new CSS here for the code box & copy button

const Tutorial2 = ({ useYouTube = true }) => {

  const code1 = `python -m venv ai`;

  const code2 = `vir\\Scripts\\activate.bat`;

  const code3 = `source my_env/bin/activate`;

  const code4 = `openai==1.52.0
python-dotenv==1.0.1
pypdf==5.0.1
langchain==0.3.4
langchain-community==0.3.3
pinecone-client[grpc]`;

  const code5 = `pip install -r requirements.txt`;

  const code6 = `OPENAI_API_KEY="YOUR API KEY HERE"

PINECONE_API_KEY="YOUR API KEY HERE"

PINECONE_REGION="REGION"   # example: us-east-1

PINECONE_CLOUD="aws"

PINECONE_INDEX="index-name"   # name whatever you want`;

  const code7 = `import os
import re
import time
import glob
from dotenv import load_dotenv
from openai import OpenAI
from pinecone.grpc import PineconeGRPC as Pinecone
from pinecone import ServerlessSpec
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from tqdm.auto import tqdm

load_dotenv()

client = OpenAI()

MODEL = "text-embedding-3-small"

res = client.embeddings.create(
    input=[
        "Sample document text goes here",
        "there will be several phrases in each batch"
        ], 
    model=MODEL
)

# we can extract embeddings to a list
embeds = [record.embedding for record in res.data]
len(embeds)

# Initialize Pinecone
pc = Pinecone()

spec = ServerlessSpec(cloud=os.environ.get("PINECONE_CLOUD"), region=os.environ.get("PINECONE_REGION"))

# Define the index name
index_name = os.environ.get("PINECONE_INDEX")

# Create the index if it doesn't exist
if index_name not in pc.list_indexes().names():
    # if does not exist, create index
    pc.create_index(
        index_name,
        dimension=len(embeds[0]),  # dimensionality of text-embed-3-small
        metric='dotproduct',
        spec=spec
    )
    # wait for index to be initialized
    while not pc.describe_index(index_name).status['ready']:
        time.sleep(1)

# Instantiate the index
index = pc.Index(index_name)
time.sleep(1)
# view index stats
index.describe_index_stats()

# Define a function to preprocess text
def preprocess_text(text):
    # Replace consecutive spaces, newlines and tabs
    text = re.sub(r'\\s+', ' ', text)
    return text

metadata = []

def process_pdf(file_path):
    # create a loader
    loader = PyPDFLoader(file_path)
    # load your data
    data = loader.load()
    # Split your data up into smaller documents with Chunks
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    documents = text_splitter.split_documents(data)
    # Convert Document objects into strings
    texts = [str(doc.page_content) for doc in documents]
    metadata.extend(doc.metadata for doc in documents)
    return texts

# Initialize an empty list to hold all texts
texts = []

# Process all PDF files in the 'docs' folder
for file_path in glob.glob('./docs/*.pdf'):
    texts.extend(process_pdf(file_path))

print(len(metadata))
print(len(texts))
count = 0  # we'll use the count to create unique IDs
batch_size = 32  # process everything in batches of 32

for i in tqdm(range(0, len(texts), batch_size)):
    # set end position of batch
    i_end = min(i+batch_size, len(texts))
    # get batch of lines and IDs
    lines_batch = texts[i: i_end]
    meta_batch = metadata[i: i_end]
    ids_batch = [str(n) for n in range(i, i_end)]
    # create embeddings
    res = client.embeddings.create(input=lines_batch, model=MODEL)
    embeds = [record.embedding for record in res.data]
    # prep metadata and upsert batch
    meta = [{'text': line, 'source': meta['source'], 'page': meta['page']} for line, meta in zip(lines_batch, meta_batch)]
    to_upsert = zip(ids_batch, embeds, meta)
    # upsert to Pinecone
    index.upsert(vectors=list(to_upsert))`;

  return (
    <div className="container">
      <h2>Tutorial 2 - Embedding PDFs</h2>

      <br></br>
      {/* General Information Text Box */}
      <div className="info-text">
        <h3>General Info</h3>
        <p>
          This tutorial will show you how to make a vector database in Pinecone by embedding pdf documents from a folder. This is going to set up a vector database that we can use for the RAG AI-agent that we will build in the next tutorial. 
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
            src="https://www.youtube.com/embed/ayjnHFDFLQw"
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
        <h2>Create an virtual environment</h2>
        <p>
          Just like the last step we are going to want to create and activate the virtual environment for our project. If you are working in the same root directory, you do not have to create a new environment just make sure that the environment is actvated in your current terminal session.
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
          Similar to the last step, if you are working in the same root directory, you can simply add the new packages to your old requirements.txt file. The complete file is visisble below.
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
        <h2>Store your new API variables in your .env file</h2>
        <p>
        You will need to add the following sections to your .env file to enable your code to utilize pinecon API calls. <a href="https://login.pinecone.io/login?state=hKFo2SB1SGxhWTZwNVNNNVcyZF9zb1haVU0xWkh6TWF1NW1Ld6FupWxvZ2luo3RpZNkgS1Z2cnh5RFF6bk5FdTdyQm8tdkdkT29xSzB5WG5iemujY2lk2SBUOEkyaEc2Q2FaazUwT05McWhmN3h6a1I0WmhMcVM0Qw&client=T8I2hG6CaZk50ONLqhf7xzkR4ZhLqS4C&protocol=oauth2&audience=https%3A%2F%2Fus-central1-production-console.cloudfunctions.net%2Fapi%2Fv1&scope=openid%20profile%20email%20read%3Acurrent_user&redirect_uri=https%3A%2F%2Fapp.pinecone.io&sessionType=signup&response_type=code&response_mode=query&nonce=NW8wMC13OXlaRjlDNXNfSWxtWVZtdTVIYkFuRS4tV2o5dk8xSVAuck5NQQ%3D%3D&code_challenge=3eV-pnh-LqR6sJBDUgT9Uwhhx1f5AbpfMCdgZhYyU5Y&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4xMi4xIn0%3D">Create a Pinecone account</a> and set up an index specifying the "text-embedding-3-small" model to create an index with the proper dimensions. You can grab your API key from the API Keys tab on the sidebar of the dashboard.
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
        Now it is time to write the script to embed our pdfs. First lets make a directory named "docs" in your root directory. In this tutorial, we used an open-sourced <a href="/Introduction_to_Philosophy.pdf" download>Philosophy Textbook</a> and <a href="/World_History_Volume_1.pdf" download>History Textbook</a> which you can download through their respective links, or you can use your own documents. Once you have your documents gathered make sure you put them in your "docs" folder as this will give our code a bin to pull the documents from.
        </p>
      </div>

      {/* Sample Code Text Box */}
      <div className="text-area">
        <h3>ingest.py</h3>
        <CodeSnippet codeText={code7} />
      </div>

      {/* General Information Text Box */}
      <div className="info-text">
        <p>
        After running your script, you should be able to see the index you created on your Pinecone dashboard is now populated! Congratualations! You are now ready for the final part of the tutorial where you will learn how to use langchain to query the database you just created to create a RAG AI-Agent.
        </p>
      </div>
    </div>
  );
};

export default Tutorial2;
