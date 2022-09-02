import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const style = {
  button: "bg-gray-200 px-4 py-2 hover:bg-gray-100 rounded-md shadow-xl",
};

const SignOut = () => {
  const googleLogOutHandler = () => {
    signOut(auth);
  };

  return (
    <button className={style.button} onClick={googleLogOutHandler}>
      Log out
    </button>
  );
};

export default SignOut;
