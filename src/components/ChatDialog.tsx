import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Shield } from "lucide-react";
import { useState } from "react";

interface ChatDialogProps {
  residenceName: string;
  onClose: () => void;
}

export const ChatDialog = ({ residenceName, onClose }: ChatDialogProps) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "residence",
      text: "¡Hola! ¿En qué puedo ayudarte?",
      time: "14:30"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "user",
        text: newMessage,
        time: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-h-[80vh]">
      <div className="border-b p-4">
        <h3 className="font-bold text-lg">{residenceName}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
          <Shield className="h-3 w-3" />
          <span>No compartas datos personales en el chat</span>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.sender === "residence" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=SF" />
                  <AvatarFallback>SF</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">{message.time}</span>
              </div>
              {message.sender === "user" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                  <AvatarFallback>Tú</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe tu consulta..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};