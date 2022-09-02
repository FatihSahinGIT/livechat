// FIRBEASE IMPORT
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

// GOOGLE BUTTON IMPORT
import GoogleBtn from "react-google-button";

const style = {
  wrapper: "flex justify-center",
};

const googleSignHandler = () => {
  const provider = new GoogleAuthProvider();

  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleBtn onClick={googleSignHandler}/>
    </div>
  );
};

export default SignIn;
