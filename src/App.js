import React from "react";

import Navbar from "./Comp/Nav";

// FIREBASE IMPORTS
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Chat from "./Comp/Chat";

const style = {
  container: "max-w-[728px] mx-auto text-center shadow-2xl rounded-2xl",
  chatbox:
    "flex flex-col h-[90vh] bg-gray-300 mt-10 shadow-xl border relative rounded-2xl",
};

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.container}>
      <section className={style.chatbox}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
};

export default App;
