import React from "react";

import css from "./Loader1.module.css";

import { loaderExample } from "./loader1Examle";

import CodeWrite from "../CodeWrite";

const Loader1 = () => {
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
      <CodeWrite loaderExample={loaderExample} />
    </div>
  );
};

export default Loader1;
