import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] border border-gray-200 bg-white relative rounded-tr-lg rounded-tl-lg">
        <div className="absolute top-0 left-0 border-b border-gray-200 px-4 py-3 bg-white w-full rounded-tr-lg rounded-tl-lg">
          Top Chat
        </div>
        <div className="overflow-y-scroll flex flex-col-reverse h-[600px] pb-4 p-2">
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-full p-2 border border-gray-200 border-t-0 rounded-bl-lg rounded-br-lg flex gap-3 bg-white"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Shubodeep sengupta",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-5 p-2 rounded-full border border-gray-200 w-[80%]"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 bg-green-100 rounded-lg">Send</button>
      </form>
    </>
  );
};
export default LiveChat;
