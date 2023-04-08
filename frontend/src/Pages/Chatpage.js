import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setchats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setchats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((c) => (
        <div key={c._id}>{c.chatName}</div>
      ))}
    </div>
  );
};

export default Chatpage;
