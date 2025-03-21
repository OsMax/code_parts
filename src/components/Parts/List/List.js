import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import { ToastContainer } from "react-toastify";
import { example } from "./ListExample";
import Loader1 from "../Loaders/Loader1/Loader1";
import css from "./List.module.css";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getList } from "../../../redux/List/listOperation";
import { selectList, selectLoader } from "../../../redux/List/listSelector";

import { ReactComponent as Copy } from "../../../assets/svg/copy.svg";

import { copyCode } from "../../../helpers/copyCode";

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const loader = useSelector(selectLoader);

  // const getList = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://code-parts-server.onrender.com/api/list"
  //     );
  //     setList(data);
  //   } catch (error) {
  //     console.error("Error fetching list:", error.message);
  //   }
  // };

  // const copyCode = () => {
  //   navigator.clipboard
  //     .writeText(example)
  //     .then(() => {
  //       toast.success("Code is copy");
  //     })
  //     .catch((error) => {
  //       toast.error(error);
  //     });
  // };

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

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
          {!loader > 0 ? (
            list.map((item) => {
              return (
                <li key={item.item} className={css.listItem}>
                  {item.item}
                </li>
              );
            })
          ) : (
            <Loader1 />
          )}
        </ul>
      </div>
      <div
        style={{
          position: "relative",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <pre
          style={{
            maxHeight: "240px",
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
          onClick={() => copyCode(example)}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default List;
