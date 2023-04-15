import React from 'react';
import CodeSnippetCard from '../components/CodeSnippetCard';
import '../styles/CodeSnippetCard.css'


const codeSnippet = {
  title: 'Code Snippet Title',
  author: 'Author Name',
  code: "code-snippet-card-code {font-size: 12px;background-color: #fffbf5;padding: code-snippet-card-code {font-size: 12px;background-color: #fffbf5;padding:code-snippet-card-pre-wrap; word-wrap: break-word;5px;overflow-x: auto;white-space: pre-wrap; word-wrap: break-word; max-height: 150px;}",
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
}; 

const codeSnippet1 = {
  title: 'Code Snippet Title',
  author: 'Author Name',
  code: "code-snippet-card-code {font-size: 12px;background-color: #fffbf5;padding: card-code {font-size: 12px;background-color: #fffbf5;padding: code-snippet-card-code {font-size: 12px;backgrard-code {font-size: 12px;background-color: #fffbf5;padding: code-snippet-card-code {font-size: 12px;backgrard-code {font-size: 12px;background-color: #fffbf5;padding: code-snippet-card-code {font-size: 12px;backgrard-code {font-size: 12px;background-color: #fffbf5;padding: code-snippet-card-code {font-size: 12px;backgrard-code {font-size: 12px;background-color: #fffbf5;padding: code-snippet-card-code {font-size: 12px;backgrard-code {font-size: 12px;background-color: #fffbf5;padding: code-snippet-card-code {font-size: 12px;backgrode-snippet-card-code {font-size: 12px;background-color: #fffbf5;padding:code-snippet-card-pre-wrap; word-wrap: break-word;5px;overflow-x: auto;white-space: pre-wrap; word-wrap: break-word; max-height: 150px;}",
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
}; 


function CodeSnippets() {
    return (
      <div>
        <h1>Welcome to our code snippets website!</h1>
        <p>
          Here you'll find a collection of helpful code snippets that you can use
          in your own projects. Feel free to browse through our collection, submit
          your own code snippets, and read articles on programming and web
          development.
        </p>
        <CodeSnippetCard
    title={codeSnippet.title}
    author={codeSnippet.author}
    code={codeSnippet.code}
    tags={codeSnippet.tags}
  />
  <CodeSnippetCard
    title={codeSnippet.title}
    author={codeSnippet.author}
    code={codeSnippet.code}
    tags={codeSnippet.tags}
  />
  <CodeSnippetCard
    title={codeSnippet.title}
    author={codeSnippet.author}
    code={codeSnippet.code}
    tags={codeSnippet.tags}
  /><CodeSnippetCard
  title={codeSnippet.title}
  author={codeSnippet.author}
  code={codeSnippet.code}
  tags={codeSnippet.tags}
/><CodeSnippetCard
    title={codeSnippet1.title}
    author={codeSnippet1.author}
    code={codeSnippet1.code}
    tags={codeSnippet1.tags}
  /><CodeSnippetCard
  title={codeSnippet.title}
  author={codeSnippet.author}
  code={codeSnippet.code}
  tags={codeSnippet.tags}
/><CodeSnippetCard
    title={codeSnippet.title}
    author={codeSnippet.author}
    code={codeSnippet.code}
    tags={codeSnippet.tags}
  /><CodeSnippetCard
  title={codeSnippet.title}
  author={codeSnippet.author}
  code={codeSnippet.code}
  tags={codeSnippet.tags}
/><CodeSnippetCard
    title={codeSnippet.title}
    author={codeSnippet.author}
    code={codeSnippet.code}
    tags={codeSnippet.tags}
  />
      </div>
    );
  }
  
  export default CodeSnippets;
  