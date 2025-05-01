
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiSend, FiUser, FiHelpCircle } from "react-icons/fi";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

interface Message {
  id: number | string;
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your VIORA health assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (inputMessage.trim() === "" || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Call the Gemini AI function
      const response = await supabase.functions.invoke('gemini-chat', {
        body: { message: inputMessage },
      });

      if (response.error) {
        throw new Error(response.error.message || "Failed to get a response");
      }

      const botMessage = {
        id: Date.now() + 1,
        text: response.data.response || "I'm sorry, I couldn't process your request at the moment.",
        isBot: true,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);

      // Save conversation to database
      try {
        // Note: In a production app, we would first check if user is authenticated
        // and use their user_id, but for this demo we'll create conversations without user_id
        const { data: conversationData, error: conversationError } = await supabase
          .from('chat_conversations')
          .insert({})
          .select()
          .single();

        if (conversationError) throw conversationError;

        await supabase.from('chat_messages').insert([
          { conversation_id: conversationData.id, content: userMessage.text, is_bot: false },
          { conversation_id: conversationData.id, content: botMessage.text, is_bot: true }
        ]);
      } catch (dbError) {
        console.error("Failed to save conversation:", dbError);
        // Don't show error to user - conversation still works even if saving fails
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Sorry, I couldn't process your request. Please try again.");
      
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, there was an error processing your request. Please try again later.",
        isBot: true,
      };
      
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
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
      
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 bg-viora-background"
      >
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
              <p className="text-sm whitespace-pre-line">{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
        
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-white rounded-2xl rounded-tl-none p-3 max-w-[80%] card-shadow">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-viora-light text-viora-primary flex items-center justify-center mr-2">
                  <FiHelpCircle size={14} />
                </div>
                <span className="font-medium text-sm">VIORA Assistant</span>
              </div>
              <p className="text-sm mt-1">Thinking...</p>
              <div className="flex gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-viora-primary animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-viora-primary animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 rounded-full bg-viora-primary animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-3 bg-white border-t sticky bottom-20">
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your health question..."
            className="rounded-full border-gray-200"
            disabled={isLoading}
          />
          <Button
            onClick={sendMessage}
            className="rounded-full bg-viora-primary hover:bg-viora-primary/80 px-4"
            disabled={isLoading || inputMessage.trim() === ""}
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
