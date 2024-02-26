import "../App.css";
import { useState, useEffect } from "react";

const Chats = () => {
  const [previousChats, setPreviousChats] = useState([]);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setValue("");
  };

  const getMessages = async () => {
    setLoading(true);
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("https://legacy-ai-server.vercel.app/completions", options);
      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setMessage(data.choices[0].message);
      } else {
        setMessage(null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: "user",
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);

  const currentChat = previousChats.filter(
    (previousChat) => previousChat.title === currentTitle
  );
  const uniqueTitles = Array.from(
    new Set(previousChats.map((previousChat) => previousChat.title))
  );

  return (
    <>
      <div className="chats-bot">
        <section className={`side-bar ${showNavbar ? "show-navbar" : ""}`}>
          <button className="navbar-toggler" onClick={toggleNavbar}></button>
          <button className="new-chat" onClick={createNewChat}>New chat</button>
          <h6>Your chats Title Appear here 👇 </h6>
          <ul className="history">
            {uniqueTitles?.map((uniqueTitle, index) => (
              <li key={index} onClick={() => handleClick(uniqueTitle)}>
                {uniqueTitle}
              </li>
            ))}
          </ul>
          <nav>
            <p>Made By LegacyGPT</p>
          </nav>
        </section>
        <section className="main">
          <button className="new-chat new-chat-mobile" onClick={createNewChat}>New chat</button>
          {!currentTitle && (
            <div className="cards-sections cards-chat"> 
              {/* Your cards content */}
            </div>
          )}
          <ul className="feed">
            {currentChat?.map((chatMessage, index) => (
              <li key={index}>
                <p className="role"> {chatMessage.role}</p>
                <p> {chatMessage.content}</p>
              </li>
            ))}
          </ul>
          <div className="bottom-section">
            <div className="input-container">
              <textarea
                rows="1"
                style={{ resize: "none" }}
                placeholder="Ask me anything"
                className="input-chat"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div
                id="submit"
                onClick={getMessages}
                className={loading ? "loading" : ""}
              >
                {loading ? "Loading..." : <img className="send" src="/assets/send.png"/>}
              </div>
            </div>
            <p className="info">
              <p>By using our AI, you agree and accept our <a href=""><u>Privacy</u></a> & <a href="">terms of service</a></p>
              <div className="infos-details">
                <a href="/"><h6> <u>Home</u></h6></a>
                <a><h6> <u>Privacy</u> </h6></a>
              </div>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Chats;
