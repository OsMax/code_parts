import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import { example } from "./ListExample";

const array = ["example 1", "example 2", "example 3"];

const List = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#fff", fontSize: 20 }}>
        <span style={{ color: "rgb(199, 120, 221)" }}>/</span>list
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            width: 280,
            border: "1px solid #fff",
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: 8,
            listStyle: "none",
            color: "#fff",
          }}
        >
          {array.map((item) => {
            return (
              <li style={{ padding: 6, boxShadow: "2px 2px 2px #bbb" }}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <pre style={{ maxHeight: 200 }}>
        <code className="language-javascript">{example}</code>
      </pre>
    </div>
  );
};

export default List;
