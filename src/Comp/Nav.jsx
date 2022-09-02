// FIREBASE IMPORT
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// COMPONENT IMPORT
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const style = {
  nav: "bg-gray-500 h-20 flex justify-between items-center p-10 rounded-t-lg m-1",
  heading: "text-white text-2xl",
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Livechat</h1>
      {user ? <SignOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
