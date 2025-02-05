import React, { useEffect } from "react";

import css from "./Loader1.module.css";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";

import { loader1 } from "./loader1Examle";

const Loader1 = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={css.loadercont}>
      <div
        style={{
          width: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={css.loader}></div>
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
    </div>
  );
};

export default Loader1;
