import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Loader2 } from 'lucide-react';
import { queryGemini } from '../services/geminiService';

interface AISearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AISearchModal: React.FC<AISearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);
    try {
      const result = await queryGemini(query);
      setResponse(result);
    } catch (error) {
      setResponse("Sorry, I encountered an error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        onClick={onClose}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal Panel */}
        <div 
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start w-full">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                <Bot className="h-6 w-6 text-accent" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Ask AI about Dr. Chen
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Ask about research papers, travel history, or educational background.
                  </p>
                </div>
                
                <form onSubmit={handleSearch} className="mt-4 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    className="shadow-sm focus:ring-accent focus:border-accent block w-full sm:text-sm border-gray-300 rounded-md p-3 pr-10 border"
                    placeholder="e.g., What are his research interests?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className="absolute right-2 top-2 p-1 text-gray-400 hover:text-accent"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : <Send className="h-5 w-5" />}
                  </button>
                </form>

                {response && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn">
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{response}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISearchModal;
