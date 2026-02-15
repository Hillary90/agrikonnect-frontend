import { useState } from "react";
import Inbox from "../components/messaging/Inbox";
import ChatView from "../components/messaging/ChatView";
import UserSearch from "../components/messaging/UserSearch";

export default function Messages() {
  const [activeUser, setActiveUser] = useState(null);
  const [activeUserName, setActiveUserName] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const handleSelectUser = (user) => {
    setActiveUser(user.id);
    setActiveUserName(user.username || `${user.first_name} ${user.last_name}`);
  };

  const handleInboxSelect = (userId, userName) => {
    setActiveUser(userId);
    setActiveUserName(userName);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-background">
      {/* Show inbox on mobile only when no active chat */}
      <div className={`${activeUser ? 'hidden md:flex' : 'flex'} md:flex`}>
        <Inbox 
          onSelect={handleInboxSelect} 
          activeUserId={activeUser}
          onNewChat={() => setShowSearch(true)}
        />
      </div>
      
      {/* Show chat on mobile only when chat is active */}
      <div className={`${activeUser ? 'flex' : 'hidden md:flex'} flex-1`}>
        <ChatView 
          userId={activeUser} 
          userName={activeUserName}
          onBack={() => setActiveUser(null)}
        />
      </div>
      
      {showSearch && (
        <UserSearch
          onSelectUser={handleSelectUser}
          onClose={() => setShowSearch(false)}
        />
      )}
    </div>
  );
}
