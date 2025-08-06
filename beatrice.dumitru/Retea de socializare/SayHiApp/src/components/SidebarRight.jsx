import React, { useState } from "react";
import "../styles/SidebarRight.scss";
import ChatBox from "./ChatBox";

const contacts = [
  { name: "Andreea", online: true, avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Radu", online: false, avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Maria", online: true, avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Ioana", online: false, avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "Mihai", online: true, avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "Elena", online: false, avatar: "https://i.pravatar.cc/150?img=6" },
  { name: "Alex", online: true, avatar: "https://i.pravatar.cc/150?img=7" },
  { name: "Denisa", online: false, avatar: "https://i.pravatar.cc/150?img=8" },
  { name: "Victor", online: true, avatar: "https://i.pravatar.cc/150?img=9" },
  { name: "Bianca", online: false, avatar: "https://i.pravatar.cc/150?img=10" },
  { name: "George", online: true, avatar: "https://i.pravatar.cc/150?img=11" },
  { name: "Oana", online: true, avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Paul", online: false, avatar: "https://i.pravatar.cc/150?img=13" },
  { name: "Laura", online: true, avatar: "https://i.pravatar.cc/150?img=14" },
  { name: "Tudor", online: false, avatar: "https://i.pravatar.cc/150?img=15" },
  { name: "Claudia", online: true, avatar: "https://i.pravatar.cc/150?img=16" },
  { name: "Diana", online: false, avatar: "https://i.pravatar.cc/150?img=17" },
  { name: "Robert", online: true, avatar: "https://i.pravatar.cc/150?img=18" },
  { name: "Cristina", online: false, avatar: "https://i.pravatar.cc/150?img=19" },
  { name: "Sergiu", online: true, avatar: "https://i.pravatar.cc/150?img=20" },
];

const SidebarRight = () => {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="sidebar right">
      <h3>Contacts</h3>
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="contact-item"
            onClick={() => setActiveChat(contact)}
          >
            <img src={contact.avatar} alt={contact.name} className="avatar" />
            <span
              className={`status-dot ${contact.online ? "online" : "offline"}`}
            ></span>
            {contact.name}
          </li>
        ))}
      </ul>

      {activeChat && (
        <ChatBox
          contact={activeChat}
          onClose={() => setActiveChat(null)}
        />
      )}
    </div>
  );
};

export default SidebarRight;