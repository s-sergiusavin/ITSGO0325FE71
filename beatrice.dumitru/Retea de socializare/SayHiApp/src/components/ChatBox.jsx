import React, { useState } from "react";
import "../styles/ChatBox.scss";

const ChatBox = ({ contact, onClose }) => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setConversation([...conversation, { from: "me", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <img src={contact.avatar} alt={contact.name} />
        <span>{contact.name}</span>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="chat-messages">
        {conversation.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.from === "me" ? "sent" : "received"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Send a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;