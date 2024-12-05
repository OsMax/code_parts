import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChoice } from "../../redux/store";
import css from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const selectedChoice = useSelector((state) => state.choice.selectedChoice);

  // const [choice, setCoice] = useState("");

  const handleChange = (event) => {
    dispatch(setChoice(event.target.value));
  };

  return (
    <header className={css.header}>
      <select
        value={selectedChoice}
        onChange={handleChange}
        className={css.select}
      >
        <option value="" disabled style={{ color: "#888" }}>
          select an item...
        </option>
        <option value="option1">SingUp</option>
        <option value="option2">Опція 2</option>
        <option value="option3">Опція 3</option>
      </select>
    </header>
  );
};

export default Header;
