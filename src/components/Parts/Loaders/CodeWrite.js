import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import { useEffect } from "react";

const CodeWrite = ({ loaderExample }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <pre
        style={{
          width: "30%",
          height: "240px",
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #2d2d2d",
        }}
      >
        <code className="language-javascript">{loaderExample.js}</code>
      </pre>
      <pre
        style={{
          width: "30%",
          height: "240px",
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #2d2d2d",
        }}
      >
        <code className="language-javascript">{loaderExample.css}</code>
      </pre>
    </>
  );
};
export default CodeWrite;
