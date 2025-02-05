import React, { useEffect } from "react";

import css from "./Loader2.module.css";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";

import { loader2 } from "./loader2Examle";

const Loader2 = () => {
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
        <code className="language-javascript">{loader2.js}</code>
      </pre>
      <pre
        style={{
          width: "30%",
          height: "240px",
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #2d2d2d",
        }}
      >
        <code className="language-javascript">{loader2.css}</code>
      </pre>
    </div>
  );
};

export default Loader2;
