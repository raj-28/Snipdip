import React from 'react';

const CodeSnippetCard = ({ title, author, code, tags }) => {
  return (
    <div className="card code-snippet-card ">
      <div className="card-header code-snippet-card-header">
        <h5 className="card-title code-snippet-card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted code-snippet-card-author">{author}</h6>
      </div>
      <div className="card-body code-snippet-card-body">
        <pre><code className="code-snippet-card-code">{code}</code></pre>
      </div>
      <div className="card-footer code-snippet-card-footer">
        {tags.map(tag => (
          <span key={tag} className="badge badge-primary code-snippet-card-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default CodeSnippetCard;
