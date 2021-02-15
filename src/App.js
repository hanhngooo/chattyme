import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("userName")) {
    return <LoginForm />;
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="6a8e8d7e-2581-4edf-9edc-cac5f607b7d4"
      userName={localStorage.getItem("userName")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
