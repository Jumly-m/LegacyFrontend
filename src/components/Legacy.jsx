import  { useState } from 'react';
import axios from 'axios';

function Legacy() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
        const response = await axios.post('http://localhost:3000/generate', { message: inputMessage });
        let responseData = response.data.response.response.candidates[0].content.parts[0].text;
        
        // Remove asterisks and hash symbols from the response
        responseData = responseData.replace(/\*/g, '').replace(/#/g, '');

        // Replace '##' with numbers and arrange content starting with a,b,c,d in bulleted lists
        responseData = responseData.replace(/##/g, '1.');
        responseData = responseData.replace(/(^|\n)([abcd]\.)/g, '\n• $2');

        // Ensure each number starts a new line and is spaced well
        responseData = responseData.replace(/(\d+)\./g, '\n$1.');

        // Create sub-paragraphs for each line
        responseData = responseData.split('\n').map(line => {
            if (line.trim() !== '') {
                return '   • ' + line.trim();
            } else {
                return line;
            }
        }).join('\n');

        setMessages(prevMessages => [
            ...prevMessages, 
            { text: inputMessage, isUser: true },
            { text: responseData, isUser: false }
        ]);
        
        setInputMessage('');
    } catch (error) {
        console.error('Error sending message:', error);
    } finally {
        setLoading(false);
    }
};





  return (
    <div className="container-chat" style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
    <div className="container-response">
    {
          messages.length === 0 && !loading && (
            <div className="placeholder-content">
            <img src="assets/logoAi.png" alt="" className='logo'/>
            <h3>Welcome to LegacyGPT</h3>
              <div className="product-container">
                <button className='display-btn'  href="">ShopAI</button>
                <button className='display-btn' href="">AINews</button>
                <button className='display-btn' href="">AIWallet</button>
                <button className='display-btn' href="">BuyNow</button>
              </div>
             
            </div>
          )
        }
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`container-response ${msg.isUser ? 'user-message' : 'ai-message'}`}
          style={{ textAlign: msg.isUser ? 'right' : 'left' }}
        >
          {msg.text}
        </div>
      ))}
    </div>
    <div className="container-input">
      <textarea
        className='textarea'
        type="text"
        value={inputMessage}
        onChange={e => setInputMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button className="submit-btn" onClick={sendMessage}>Send</button>
      {loading && <div>Loading...</div>}
    </div>
  </div>
  
  );
}

export default Legacy;
