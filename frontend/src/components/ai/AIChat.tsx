import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { askAi } from '../../lib/api';
import { Send, CornerDownLeft } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What are his strongest technical skills?",
  "Tell me about his AI projects.",
  "What does he know about RAG?",
  "Why would he be a good fit for an AI role?"
];

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, error]);

  const handleSubmit = async (question: string) => {
    if (!question.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: question.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await askAi(question.trim());
      const aiMessage: Message = { id: (Date.now() + 1).toString(), role: 'ai', content: response.answer };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      setError("Something interrupted the connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(inputValue);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Header / Empty State if no messages */}
      {messages.length === 0 ? (
        <div className="flex-1 flex flex-col justify-center items-center p-8 text-center h-full">
          <div className="w-12 h-[2px] bg-accent mb-6"></div>
          <h3 className="text-xs font-bold tracking-[0.25em] text-dark/40 mb-4 uppercase">AI Knowledge Interface</h3>
          <h2 className="text-3xl font-display font-bold text-dark mb-4">Ask a question about my technical background.</h2>
          <p className="text-dark/60 max-w-md mx-auto mb-12 text-sm font-medium">
            This AI has been trained on my portfolio, projects, and resume. Feel free to interrogate it.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleSubmit(q)}
                className="text-left p-4 rounded-xl border border-dark/5 bg-white hover:bg-dark hover:text-white transition-all text-sm font-semibold text-dark/70 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {q}
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 relative">
          <div className="absolute inset-0 overflow-y-auto p-6 md:p-8 scroll-smooth">
            <div className="flex flex-col space-y-8">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`flex flex-col max-w-[90%] md:max-w-[80%] ${msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
                >
                  <span className="text-[9px] font-bold tracking-[0.2em] text-dark/40 mb-2 uppercase">
                    {msg.role === 'user' ? 'YOU' : 'SHRAVAN AI'}
                  </span>
                  <div className={`p-5 rounded-[1.5rem] text-sm md:text-base font-medium leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-dark text-white rounded-br-sm shadow-md' 
                      : 'bg-white border border-dark/5 shadow-sm text-dark/90 rounded-bl-sm whitespace-pre-wrap'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col self-start items-start max-w-[85%]"
              >
                <span className="text-[9px] font-bold tracking-[0.2em] text-dark/40 mb-2 uppercase">SHRAVAN AI</span>
                <div className="p-5 rounded-[1.5rem] rounded-bl-sm bg-white border border-dark/5 shadow-sm flex items-center gap-4 text-xs font-bold text-dark/50 tracking-widest uppercase">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-dark/10 border-t-accent rounded-full"
                  />
                  ANALYZING PROFILE
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-6 w-full text-center"
              >
                <div className="text-accent font-bold text-sm mb-4 bg-accent/10 px-4 py-2 rounded-lg">{error}</div>
                <button 
                  onClick={() => handleSubmit(messages[messages.length - 1].content)}
                  className="px-6 py-3 border border-dark/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-dark hover:text-white transition-all shadow-sm"
                >
                  TRY AGAIN
                </button>
              </motion.div>
            )}
            <div ref={messagesEndRef} className="h-4" />
          </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-white/80 border-t border-dark/5 backdrop-blur-md">
        <div className="relative flex items-end bg-primary-bg rounded-2xl border border-dark/10 focus-within:border-accent/40 focus-within:ring-4 focus-within:ring-accent/10 transition-all p-2 shadow-inner">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something about Shravan..."
            className="w-full max-h-[150px] min-h-[50px] bg-transparent border-none focus:outline-none resize-none p-3 text-dark font-medium placeholder:text-dark/30 text-sm md:text-base leading-normal"
            disabled={isLoading}
            rows={1}
          />
          <button
            onClick={() => handleSubmit(inputValue)}
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
            className="flex-shrink-0 m-1 w-12 h-12 flex items-center justify-center rounded-xl bg-accent text-white shadow-md shadow-accent/20 hover:bg-dark hover:shadow-dark/20 transition-all disabled:opacity-40 disabled:hover:bg-accent cursor-pointer disabled:cursor-not-allowed"
          >
            <Send size={18} className={inputValue.trim() && !isLoading ? "ml-1" : ""} />
          </button>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 text-[9px] font-bold tracking-[0.2em] text-dark/30 uppercase hidden md:flex">
          <span className="flex items-center gap-2"><CornerDownLeft size={10} className="opacity-70"/> TO SEND</span>
          <span className="flex items-center gap-2">SHIFT + <CornerDownLeft size={10} className="opacity-70"/> FOR NEW LINE</span>
        </div>
      </div>
    </div>
  );
};
