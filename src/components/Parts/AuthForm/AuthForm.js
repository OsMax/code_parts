import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, register, current } from "../../../redux/Auth/authOperation";
import { selectIsLogIn } from "../../../redux/Auth/authSelector";
import { ToastContainer } from "react-toastify";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import { example } from "./AuthFormExample";
import css from "./AuthForm.module.css";
import IsLogin from "./IsLogin/IsLogin";
import { ReactComponent as Copy } from "../../../assets/svg/copy.svg";
import { copyCode } from "../../../helpers/copyCode";

const SingUp = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogIn);

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

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [checkForm, setCheckForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const changeIsLogin = (e) => {
    const name = e.target.getAttribute("name");

    if (name === "log" && checkForm === false) {
      setCheckForm(true);
    } else if (name === "reg" && checkForm === true) {
      setCheckForm(false);
    }
  };

  const submit = (e) => {
    e.preventDefault();

    if (checkForm) {
      dispatch(
        logIn({ info: { email: formData.email, password: formData.password } })
      );
    } else {
      dispatch(
        register({
          info: { email: formData.email, password: formData.password },
        })
      );
    }
  };

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <h1 className={css.title}>
        <span>/</span>authForm
      </h1>
      {!isLogin && (
        <div className={css.container}>
          <div className={css.choiseConteiner}>
            <label
              name="log"
              className={css.forChoise}
              style={{
                borderBottomColor: checkForm ? "#282c33" : "#888",
                textDecoration: checkForm ? "underline" : "none",
                boxShadow: checkForm ? "1px -1px 1px #bbb" : "none",
              }}
              onClick={changeIsLogin}
            >
              Login
            </label>
            <label
              name="reg"
              className={css.forChoise}
              style={{
                borderBottomColor: !checkForm ? "#282c33" : "#888",
                textDecoration: !checkForm ? "underline" : "none",
                boxShadow: !checkForm ? "1px -1px 1px #bbb" : "none",
              }}
              onClick={changeIsLogin}
            >
              Registration
            </label>
          </div>

          <form className={css.form} onSubmit={submit}>
            <label htmlFor="email" className={css.label}>
              Email:
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={css.input}
              />
            </label>
            <label htmlFor="password" className={css.label}>
              Password:{" "}
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={css.input}
              />
            </label>
            {!checkForm && (
              <label htmlFor="password" className={css.label}>
                Password:
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  value={formData.password2}
                  onChange={handleChange}
                  className={css.input}
                />
              </label>
            )}
            <button type="submit" className={css.submitBtn}>
              {checkForm ? "Login" : "Registration"}
            </button>
          </form>
        </div>
      )}
      {isLogin && <IsLogin />}
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
        </pre>{" "}
        <Copy
          width={24}
          height={24}
          style={{ position: "absolute", top: 10, right: 16 }}
          onClick={() => copyCode(example)}
        />
        <ToastContainer />
      </div>
    </>
  );
};

export default SingUp;
