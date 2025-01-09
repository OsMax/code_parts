import React, { useState } from "react";
import css from "./SingUp.module.css";

const SingUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const changeIsLogin = (e) => {
    const name = e.target.getAttribute("name");

    if (name === "log" && isLogin === false) {
      setIsLogin(true);
    } else if (name === "reg" && isLogin === true) {
      setIsLogin(false);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.choiseConteiner}>
        <label
          name="log"
          className={css.forChoise}
          style={{
            borderBottomColor: isLogin ? "#282c33" : "#888",
            textDecoration: isLogin ? "underline" : "none",
            boxShadow: isLogin ? "1px -1px 1px #bbb" : "none",
          }}
          onClick={changeIsLogin}
        >
          Login
        </label>
        <label
          name="reg"
          className={css.forChoise}
          style={{
            borderBottomColor: !isLogin ? "#282c33" : "#888",
            textDecoration: !isLogin ? "underline" : "none",
            boxShadow: !isLogin ? "1px -1px 1px #bbb" : "none",
          }}
          onClick={changeIsLogin}
        >
          Registration
        </label>
      </div>

      <form className={css.form}>
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

        {errors.email && <p className={css.error}>{errors.email}</p>}
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
        {!isLogin && (
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
        {errors.password && <p className={css.error}>{errors.password}</p>}
        <button type="submit" className={css.submitBtn}>
          {isLogin ? "Login" : "Registration"}
        </button>
      </form>
    </div>
  );
};

export default SingUp;
