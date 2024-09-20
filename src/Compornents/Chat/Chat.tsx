import React, { useState } from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddIcon from "@mui/icons-material/Add";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatMessage from "./ChatMessage";
import { useAppSelector } from "../../app/hooks";
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import useSubCollection from "../../hooks/useSubCollection";

const Chat = () => {
  const [inputText, setInputText] = useState<string>("");
  const channelId = useAppSelector((state) => state.channel.channelId);

  const channelName = useAppSelector((state) => state.channel.channelName);
  const user = useAppSelector((state) => state.user.user);
  const { SubDocuments: messages } = useSubCollection("Channels", "messages");

  // console.log(channelName)
  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("send Message");
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "Channels",
      String(channelId),
      "messages"
    );
    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        message: inputText,
        timestamp: serverTimestamp(),
        user: user,
      }
    );
    // console.log(docRef);
    setInputText("");
  };

  console.log(inputText);

  return (
    <div className="chat">
      {/* {chaHeader} */}
      <ChatHeader channelName={channelName} />
      {/* {chatMessage} */}
      <div className="chatMessage">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}

        {/* <ChatMessage />
        <ChatMessage />S
        <ChatMessage />
        <ChatMessage /> */}
      </div>
      {/* {chatInput} */}
      <div className="chatInput">
        <AddIcon />
        <form>
          <input
            type="text"
            placeholder="#udemyにメッセージを送信"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
            value={inputText}
          />
          <button
            type="submit"
            className="chatInputButton"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              sendMessage(e)
            }
          >
            送信
          </button>
        </form>
        <div className="chatInputIcon">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
