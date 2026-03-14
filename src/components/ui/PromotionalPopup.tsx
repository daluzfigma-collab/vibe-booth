import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react'; // Đã xóa useEffect vì không còn dùng tới
import { useTranslation } from 'react-i18next';

export default function PromotionalPopup() {
    // Đặt state mặc định là true để popup hiện lên ngay lập tức
    const [isOpen, setIsOpen] = useState(true); 
    const { t, i18n } = useTranslation();

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleContact = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
        handleClose();
    };

    const isEnglish = i18n.language === 'en';

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
                        style={{ willChange: 'transform, opacity' }} // TỐI ƯU
                        className="relative w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-3xl"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 hover:bg-slate-100"
                        >
                            <X className="w-6 h-6 text-slate-600" />
                        </button>

                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-blue-500/10" />

                        <div className="relative p-8 md:p-12">
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="inline-block mb-4"
                            >
                                <span className="px-4 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-r from-teal-500 to-cyan-500">
                                    {t('promoPopup.subtitle')}
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-2 text-3xl font-bold leading-tight md:text-4xl text-slate-900"
                            >
                                {t('promoPopup.title', 'Khuyến Mãi Khai Trương Phần Mềm')}
                            </motion.h2>

                            <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mb-8 text-slate-600"
                            >
                                {t('promoPopup.description')}
                            </motion.p>

                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:gap-8"
                            >
                                <div className="flex flex-col justify-center p-5 transition-colors border border-teal-200 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 hover:border-teal-400">
                                    <h3 className="mb-2 text-sm font-bold text-slate-900">
                                        {t('promoPopup.plan_6months')}
                                    </h3>
                                    <p className={`font-bold text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text ${
                                        isEnglish ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
                                    }`}>
                                        {t('promoPopup.plan_6months_price')}
                                    </p>
                                </div>

                                <div className="relative flex flex-col justify-center p-5 transition-colors border border-blue-200 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:border-blue-400">
                                    <div className="absolute px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full shadow-md -top-3 -right-3">
                                        HOT
                                    </div>
                                    <h3 className="mb-2 text-sm font-bold text-slate-900">
                                        {t('promoPopup.plan_12months')}
                                    </h3>
                                    <p className={`font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text ${
                                        isEnglish ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
                                    }`}>
                                        {t('promoPopup.plan_12months_price')}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.button
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleContact}
                                className="w-full px-6 py-4 font-bold text-white transition-all bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl hover:shadow-lg shadow-teal-500/20"
                            >
                                {t('promoPopup.cta')}
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}