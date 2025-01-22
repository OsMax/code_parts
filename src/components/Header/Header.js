import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const value = location.pathname.slice(1);

  const [part, setPart] = useState(value);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setPart(event.target.value);
    navigate(`/${event.target.value}`);
  };

  return (
    <header className={css.header}>
      <div className={css.selectCont}>
        <select
          value={part}
          onChange={handleChange}
          className={css.select}
          style={!part ? { color: "#999" } : { color: "#eee" }}
        >
          <option value="" disabled style={{ color: "#888" }}>
            select an item...
          </option>
          <option value="list" className={css.forGet}>
            List
          </option>
          <option value="auth" className={css.forGet}>
            AuthForm
          </option>
          <option value="option3" className={css.forGet}>
            Опція 3
          </option>
        </select>
      </div>
    </header>
  );
};

export default Header;
