import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
        >
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full bg-teal-400 opacity-40 animate-ping"></div>

            {/* Chat Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 w-[340px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
                    >
                        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 flex items-center justify-between text-white">
                            <div>
                                <h3 className="font-bold">Chat trực tiếp cùng chúng tôi</h3>
                                <p className="text-xs opacity-90">Phản hồi nhanh trong vài phút ⚡️</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        {/* Facebook Page Plugin Iframe (Messages Tab) */}
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61573162288644&tabs=messages&width=340&height=430&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                            width="340"
                            height="430"
                            style={{ border: 'none', overflow: 'hidden', background: '#ffffff' }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Messenger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-teal-500 to-cyan-400 text-white rounded-full shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1 transition-all duration-300 z-50 focus:outline-none"
                aria-label="Toggle Chat"
            >
                {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}

                {/* Tooltip (Only show if closed) */}
                {!isOpen && (
                    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-300 shadow-md group-hover:opacity-100">
                        Chat với VibeBooth
                        <span className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-slate-900"></span>
                    </span>
                )}
            </button>

            {/* Hover style for tooltip */}
            <style>{`
        button:hover > span {
          opacity: 1;
        }
      `}</style>
        </motion.div>
    );
}
