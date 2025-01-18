import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  const [part, setPart] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    // console.log(event.target.value);
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
          <option value="list">List</option>
          <option value="sing">SingUp</option>
          <option value="option3">Опція 3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
