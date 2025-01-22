import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import { example } from "./ListExample";
import axios from "axios";
import css from "./List.module.css";

const List = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const { data } = await axios.get(
        "https://code-parts-server.onrender.com/api/list"
      );
      setList(data); // Используем data из ответа
    } catch (error) {
      console.error("Error fetching list:", error.message);
    }
  };

  const copyCode = () => {};

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
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <pre
          style={{
            maxHeight: "240px",
            width: "90%",
            scrollbarWidth: "thin",
            scrollbarColor: "#888 #2d2d2d",
          }}
        >
          <code className="language-javascript">{example}</code>
        </pre>
      </div>
    </div>
  );
};

export default List;
