import React from "react";

import css from "./Loader.module.css";
import Loader1 from "./Loader1/Loader1";
import Loader2 from "./Loader2/Loader2";

const Loaders = () => {
  return (
    <div className={css.container}>
      <h1>
        <span>/</span>loaders
      </h1>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        <li
          style={{
            width: "100%",
          }}
        >
          <Loader1 />
        </li>
        <li>
          <Loader2 />
        </li>
      </ul>
    </div>
  );
};

export default Loaders;
// test gh action
