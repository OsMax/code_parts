import React, { useState } from "react";

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
    <div
      style={{
        position: "relative",
        margin: "auto",
        marginTop: "52px",
        maxWidth: "320px",
        padding: "10px",
        borderRight: " 2px solid #ccc",
        borderBottom: "2px solid #ccc",
        borderTop: "2px solid #888",
        borderLeft: "2px solid #888",
        // box-shadow: "2px 2px 2px #bbb";
        borderEndEndRadius: "10px",
        boxShadow: "2px 2px 2px #bbb",
        // boxSizing: "border-box",
      }}
    >
      <div
        style={{
          color: "#fff",
          position: "absolute",
          top: "-38px",
          left: "-2px",
          display: "flex",
          flexDirection: "row",
          gap: "2px",
          boxSizing: "border-box",
        }}
      >
        <label
          name="log"
          style={{
            border: "2px solid #888",
            padding: "8px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomColor: isLogin ? "#282c33" : "#888",
            textDecoration: isLogin ? "underline" : "none",
            boxShadow: isLogin
              ? "1px -1px 1px #bbb" // Левый верхний и правый
              : "none",
            cursor: "pointer",
          }}
          onClick={changeIsLogin}
        >
          Login
        </label>
        <label
          name="reg"
          style={{
            border: "2px solid #888",
            padding: "8px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomColor: !isLogin ? "#282c33" : "#888",
            textDecoration: !isLogin ? "underline" : "none",
            boxShadow: !isLogin
              ? "1px -1px 1px #bbb" // Левый верхний и правый
              : "none",
            cursor: "pointer",
          }}
          onClick={changeIsLogin}
        >
          Registration
        </label>
      </div>

      <form
        style={{ width: "100%", marginTop: "10px", boxSizing: "border-box" }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px", color: "#ddd" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              boxSizing: "border-box",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px", color: "#ddd" }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              boxSizing: "border-box",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {!isLogin && (
            <>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  marginTop: "15px",
                  color: "#ddd",
                }}
              >
                Password:
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </>
          )}
          {errors.password && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isLogin ? "Login" : "Registration"}
        </button>
      </form>
    </div>
  );
};

export default SingUp;
