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

  return (
    <div
      style={{
        margin: "auto",
        marginTop: "38px",
        maxWidth: "320px",
        padding: "10px",
        borderRight: " 2px solid #ccc",
        borderBottom: "2px solid #ccc",
        // box-shadow: "2px 2px 2px #bbb";
        borderRadius: "10px",
        boxShadow: "2px 2px 2px #bbb",
      }}
    >
      <form style={{ width: "100%" }}>
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
                style={{ display: "block", marginBottom: "5px", color: "#ddd" }}
              >
                Password:
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
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
          Login
        </button>
      </form>
    </div>
  );
};

export default SingUp;
