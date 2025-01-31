import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import React, { useEffect } from "react";

import css from "./Loader.module.css";
import Loader1 from "./Loader1/Loader1";

const Loaders = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={css.container}>
      <h1>
        <span>/</span>loaders
      </h1>
      <ul>
        <li>
          <Loader1 />
        </li>
      </ul>
    </div>
  );
};

export default Loaders;
// test gh action
