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
            className="fixed z-50 bottom-6 right-6"
        >
            <div className="absolute inset-0 bg-teal-400 rounded-full opacity-40 animate-ping"></div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, type: 'tween' }} // TỐI ƯU
                        style={{ willChange: 'transform, opacity' }} // TỐI ƯU
                        className="absolute bottom-20 right-0 w-[340px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
                    >
                        <div className="flex items-center justify-between p-4 text-white bg-gradient-to-r from-teal-500 to-cyan-500">
                            <div>
                                <h3 className="font-bold">Chat trực tiếp cùng chúng tôi</h3>
                                <p className="text-xs opacity-90">Phản hồi nhanh trong vài phút ⚡️</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/20 hover:bg-white/30"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61573162288644&tabs=messages&width=340&height=430&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                            width="340"
                            height="430"
                            style={{ border: 'none', overflow: 'hidden', background: '#ffffff' }}
                            scrolling="no"
                            frameBorder="0"
                            loading="lazy" // TỐI ƯU: Cực kỳ quan trọng
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 flex items-center justify-center text-white transition-all duration-300 rounded-full shadow-lg w-14 h-14 bg-gradient-to-tr from-teal-500 to-cyan-400 hover:shadow-cyan-400/50 hover:-translate-y-1 focus:outline-none"
                aria-label="Toggle Chat"
            >
                {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
                {!isOpen && (
                    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-300 shadow-md group-hover:opacity-100">
                        Chat với VibeBooth
                        <span className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-slate-900"></span>
                    </span>
                )}
            </button>
            <style>{`
        button:hover > span {
          opacity: 1;
        }
      `}</style>
        </motion.div>
    );
}