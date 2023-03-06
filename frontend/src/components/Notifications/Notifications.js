import { useState } from "react";
import Notifications from "react-notifications";
import "./styles.css";

const DEFAULT_NOTIFICATION = {
  image:
    "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
  message: "Notification one.",
  detailPage: "/events",
  receivedTime: "12h ago"
};
export default function App() {
  const [data, setData] = useState([DEFAULT_NOTIFICATION]);
  const [message, setMessage] = useState("");

  const onClick = () => {
    if (message.length > 0) {
      setData([
        ...data,
        {
          ...DEFAULT_NOTIFICATION,
          message
        }
      ]);
      setMessage("");
      alert("notification added");
    }
  };
  return (
    <div className="App">
      <h1>React Notification Menu</h1>
      <div style={{ marginLeft: "50%", marginBottom: 100 }}>
        <Notifications
          data={data}
          header={{
            title: "Notifications",
            option: { text: "View All", onClick: () => console.log("Clicked") }
          }}
          markAsRead={(data) => {
            console.log(data);
          }}
        />
      </div>
      <input
        placeholder="Enter your message"
        className="message-input"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={onClick} className="add-notification-button">
        Add Notification
      </button>
    </div>
  );
}
