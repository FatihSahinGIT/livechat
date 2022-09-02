import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

import { auth, db } from "../firebase";

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0 p-1`,
  input: `w-full text-xl p-3 bg-gray-500 text-white outline-none border-none rounded m-1 placeholder:text-white text-center`,
  btn: `w-[25%] bg-green-700 rounded text-white hover:text-gray-200 m-1`,
};

const SendMessage = (props) => {
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const sendMessageToDB = async (event) => {
    event.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    props.scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form className={style.form} onSubmit={sendMessageToDB}>
      <input
        value={input}
        onChange={inputHandler}
        type="text"
        placeholder="Message"
        className={style.input}
      />
      <button className={style.btn} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
