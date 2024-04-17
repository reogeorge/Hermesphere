import styles from "./chatRoomList.module.css";
type Props = {
  chatrooms: any;
  selectedRoom: number;
  onSelectRoom: any;
  channelSelect: string;
  setChannelSelect: any;
};
const ChatroomList = (props: Props) => {
  return (
    <>
      <p>Recent Chat rooms</p>
      <div className={styles["chatroom-list"]}>
        {props.chatrooms.map((chatroom: { id: number; name: string }) => (
          <div
            key={chatroom.id}
            className={`${styles.chatroom} ${
              props.selectedRoom === chatroom.id &&
              props.channelSelect === "chatRoom"
                ? styles.selected
                : ""
            }`}
            onClick={() => props.onSelectRoom(chatroom.id)}
          >
            {chatroom.name}
          </div>
        ))}
      </div>
      <p>Game Room</p>
      <div className={styles["chatroom-list"]}>
        <div
          className={`${styles.chatroom} ${
            props.channelSelect === "rps" ? styles.selectedGame : ""
          }`}
          onClick={() => props.setChannelSelect("rps")}
        >
          Rock Paper Scissors
        </div>
        <div
          className={`${styles.chatroom} ${
            props.channelSelect === "mg" ? styles.selectedGame : ""
          }`}
          onClick={() => props.setChannelSelect("mg")}
        >
          Memory Game
        </div>
      </div>
    </>
  );
};

export default ChatroomList;
