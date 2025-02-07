import React from "react";

import css from "./Loader2.module.css";

import { loaderExample } from "./loader2Examle";
import CodeWrite from "../CodeWrite";

const Loader2 = ({ statusCode }) => {
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

      {statusCode && <CodeWrite loaderExample={loaderExample} />}
    </div>
  );
};

export default Loader2;
