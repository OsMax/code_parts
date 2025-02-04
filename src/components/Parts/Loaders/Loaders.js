import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import React, { useEffect } from "react";

import css from "./Loader.module.css";
import Loader1 from "./Loader1/Loader1";
import { loader1 } from "./loadersExamle";

const Loaders = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={css.container}>
      <h1>
        <span>/</span>loaders
      </h1>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        <li
          style={{
            display: "flex",
            width: "100%",
            gap: "10px",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "30%" }}>
            <Loader1 />
          </div>
          <pre
            style={{
              width: "30%",
              height: "240px",
              scrollbarWidth: "thin",
              scrollbarColor: "#888 #2d2d2d",
            }}
          >
            <code className="language-javascript">{loader1.js}</code>
          </pre>
          <pre
            style={{
              width: "30%",
              height: "240px",
              scrollbarWidth: "thin",
              scrollbarColor: "#888 #2d2d2d",
            }}
          >
            <code className="language-javascript">{loader1.css}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Loaders;
// test gh action
