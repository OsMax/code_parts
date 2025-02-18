import { logOut } from "../../../../redux/Auth/authOperation";
import { useDispatch } from "react-redux";

const IsLogin = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>You are olredy LogIn!!!</h1>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default IsLogin;
