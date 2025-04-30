
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiSend, FiUser, FiHelpCircle } from "react-icons/fi";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your VIORA health assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");

    // Simulate bot response (in a real app, this would be API call)
    setTimeout(() => {
      let botResponse = {
        id: messages.length + 2,
        isBot: true,
        text: "Thank you for your message. Our AI assistant is currently being trained to provide accurate medical information. In the meantime, would you like me to connect you with educational resources or a specialist?",
      };
      
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="pb-24 flex flex-col h-screen">
      <div className="bg-viora-primary text-white p-4 sticky top-0 z-10 flex items-center gap-3">
        <Link to="/">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <FiArrowLeft size={20} />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Health Assistant</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-viora-background">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${message.isBot ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.isBot
                  ? "bg-white rounded-tl-none card-shadow"
                  : "bg-viora-primary text-white rounded-tr-none"
              }`}
            >
              {message.isBot && (
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-viora-light text-viora-primary flex items-center justify-center mr-2">
                    <FiHelpCircle size={14} />
                  </div>
                  <span className="font-medium text-sm">VIORA Assistant</span>
                </div>
              )}
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 bg-white border-t sticky bottom-20">
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your health question..."
            className="rounded-full border-gray-200"
          />
          <Button
            onClick={sendMessage}
            className="rounded-full bg-viora-primary hover:bg-viora-primary/80 px-4"
          >
            <FiSend size={18} />
          </Button>
        </div>
        <div className="text-xs text-center text-gray-500 mt-2">
          <p>For emergencies, always call your local emergency number.</p>
          <p>This chatbot does not replace professional medical advice.</p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
