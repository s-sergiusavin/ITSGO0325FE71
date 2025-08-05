import Button from "@mui/material/Button";
import styles from "./Message.module.scss";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const Message = ({ setActive }) => {
  const [message, setMessage] = useState("");

  const activeHandler = () => {
    setActive((prevState) => !prevState);
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();
    console.log(message);
    activeHandler();
  };

  return (
    <div className={styles.positions}>
      <div className={styles.closeButton} onClick={activeHandler}>
        <CloseIcon />
      </div>
      <div>
        <form onSubmit={sendMessageHandler}>
          <TextareaAutosize
            className={styles.textareaAutosize}
            aria-label="minimum height"
            minRows={6}
            placeholder="Mesajul tau aici"
            style={{ width: 500, height: 50 }}
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          />
          <Button type="submit">Trimite</Button>
        </form>
      </div>
    </div>
  );
};

export default Message;
