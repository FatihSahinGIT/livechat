import { auth } from "../firebase";

const style = {
  message:
    "flex item-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full",
  name: "absolute mt-[-2em] text-gray-600 text-xs",
  sent: "bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full",
  received: "bg-[#e5e5ea] text-black float-left rounded-br-full",
};

const Message = (props) => {
  console.log(props.message);

  const messageClass =
    props.message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{props.message.name}</p>
        <p>{props.message.text}</p>
      </div>
    </div>
  );
};

export default Message;
