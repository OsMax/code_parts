import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChoice } from "../../redux/store";
import css from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const selectedChoice = useSelector((state) => state.choice.selectedChoice);

  const handleChange = (event) => {
    dispatch(setChoice(event.target.value));
  };

  return (
    <header className={css.header}>
      <div className={css.selectCont}>
        <select
          value={selectedChoice}
          onChange={handleChange}
          className={css.select}
        >
          <option value="" disabled style={{ color: "#888" }}>
            select an item...
          </option>
          <option value="SingUp">SingUp</option>
          <option value="List">List</option>
          <option value="option3">Опція 3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
