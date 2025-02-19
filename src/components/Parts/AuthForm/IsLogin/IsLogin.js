import { logOut } from "../../../../redux/Auth/authOperation";
import { useDispatch } from "react-redux";

const IsLogin = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        border: "1px solid #fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "320px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          color: "#fff",
          margin: "0",
          padding: "20px",
          textAlign: "center",
        }}
      >
        You are olredy LogIn!!!
      </h1>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
        style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
      >
        LogOut
      </button>
    </div>
  );
};

export default IsLogin;
