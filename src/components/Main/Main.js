import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Main = () => {
  const selectedChoice = useSelector((state) => state.choice.selectedChoice);
  const [choice, setChoice] = useState("");

  useEffect(() => {
    if (selectedChoice) {
      setChoice(selectedChoice);
    }
  }, [selectedChoice]);

  return (
    <main style={{ paddingTop: 48, paddingLeft: 20, paddingRight: 20 }}>
      <div>{choice}</div>
    </main>
  );
};

export default Main;
