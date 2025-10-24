// components/Chatbot.js
"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FiX } from 'react-icons/fi'
import { FaRegCommentDots } from 'react-icons/fa'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your holdONplay Assistant. How can I help you today?", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [IsOpen, setIsOpen] = useState(false)

  
  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, newMessage]);

    // Simple response logic
    const lowerInput = input.toLowerCase();
    let botResponse = "I'm not sure how to help with that. Just KNow, We holdONplay have our ways To amplify your Music";

    if (lowerInput.includes('book')) {
      botResponse = "You can book Your Favorite Dj, Mc, Musician Here . Just Click Book on Navigation";
    } else if (lowerInput.includes('works')) {
      botResponse = "Hold on Play works just by taking advantage of existing Music Networks that will amplify your Music WorldWide";
    } else if (lowerInput.includes('price')) {
      botResponse = "Prices in Hold on play are of different plans. Starting from single to Long Play music. Click on Plans for more";
    } else if (lowerInput.includes('help')) {
      botResponse = "Sure, I'm here to help! You can ask about selling your music, prices , and how it works.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 600); // simulate delay

    setInput('');
  };

  return (
    <div style={styles.chatbotContainer} className='z-10 flex flex-col '>
      <div className={`p-5 bg-white rounded-2xl ${IsOpen ? "relative" : "hidden"}`} id='chatbot'>
      <div className="bg-white p-5 rounded-full bg-cover h-20 w-20 absolute top-[-30] left-25"> <Image src="/logo.png" alt='logo' width={200} height={20}/></div>
      <div style={styles.chatBox} className='pt-10'>
        {messages.map((msg, i) => (
          <div key={i} style={{ ...styles.message, alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            <span className='text-black'>{msg.text}</span>
          </div>
        ))}
      </div>
      <div style={styles.inputBox} className='p-5 flex flex-col'>
        <input
          type="text"
          value={input}
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          style={styles.input}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
          className='placeholder:text-gray-500 text-black border-green-500'
        />
        <button onClick={handleSend} className='bg-blue-500 p-3 rounded-2xl'>Send</button>
      </div>
      </div>
      <div className='flex'>
          <button className='rounded-full p-5 absolute right-0' onClick={() => setIsOpen(!IsOpen)} >
            <FaRegCommentDots size={50} className={`text-blue-500 p-1 absolute bg-white rounded-full   ${IsOpen ? "hidden" : "absolute animate-bounce"}`}/>
            <FiX size={50} className={`text-blue-500 absolute p-1 bg-white rounded-full   ${IsOpen ? "absolute ": "hidden"}` }/>
          </button>
      </div>
    </div>
  );
};

const styles = {
  chatbotContainer: {
    width: 300,
    padding: 10,
    fontFamily: 'Arial, sans-serif',
    position: 'fixed',
    bottom: 80,
    right: 100,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  chatBox: {
    maxHeight: 300,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginBottom: 10,
  },
  message: {
    background: '#f1f1f1',
    padding: 8,
    borderRadius: 5,
    maxWidth: '80%',
  },
  inputBox: {
    display: 'flex',
    gap: 5,
  },
  input: {
    flex: 1,
    padding: 6,
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  button: {
    padding: '6px 10px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
};

export default Chatbot;
