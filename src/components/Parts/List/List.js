import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { example } from "./ListExample";
import css from "./List.module.css";

import { ReactComponent as Copy } from "../../../assets/svg/copy.svg";

const List = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const { data } = await axios.get(
        "https://code-parts-server.onrender.com/api/list"
      );
      setList(data);
    } catch (error) {
      console.error("Error fetching list:", error.message);
    }
  };

  const copyCode = () => {
    navigator.clipboard
      .writeText(example)
      .then(() => {
        toast.success("Code is copy");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={css.container}>
      <h1>
        <span>/</span>list
      </h1>
      <div className={css.listContainer}>
        <ul className={css.list}>
          {list.length > 0 ? (
            list.map((item) => {
              return (
                <li key={item.item} className={css.listItem}>
                  {item.item}
                </li>
              );
            })
          ) : (
            <p style={{ color: "#bbb" }}>No items available</p>
          )}
        </ul>
      </div>
      <div
        style={{
          // display: "flex",
          // gap: 10,
          // flexWrap: "wrap",
          // justifyContent: "center",
          position: "relative",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <pre
          style={{
            maxHeight: "240px",
            // width: "90%",
            scrollbarWidth: "thin",
            scrollbarColor: "#888 #2d2d2d",
          }}
        >
          <code className="language-javascript">{example}</code>
        </pre>
        <Copy
          width={24}
          height={24}
          style={{ position: "absolute", top: 10, right: 16 }}
          onClick={copyCode}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default List;
