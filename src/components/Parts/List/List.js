import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";

const code = `
const List = () => {
  return (
    <div>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
  );
};
`;

const List = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>Пример подсветки кода</h1>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
  );
};

export default List;
