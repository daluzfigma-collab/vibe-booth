import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function PromotionalPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        setIsOpen(true);
    }, []);

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

    // Kiểm tra xem có phải bản dịch dài không (Anh, Trung thường dài hơn Việt ở đơn vị)
    const isEnglish = i18n.language === 'en';

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Popup - Tăng hẳn lên max-w-3xl để cực kỳ rộng rãi cho bản tiếng Anh */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-3xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 hover:bg-slate-100"
                        >
                            <X className="w-6 h-6 text-slate-600" />
                        </button>

                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-blue-500/10" />

                        {/* Content */}
                        <div className="relative p-8 md:p-12">
                            {/* Badge */}
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

                            {/* Title */}
                            <motion.h2
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-2 text-3xl font-bold leading-tight md:text-4xl text-slate-900"
                            >
                                {t('promoPopup.title', 'Khuyến Mãi Khai Trương Phần Mềm')}
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mb-8 text-slate-600"
                            >
                                {t('promoPopup.description')}
                            </motion.p>

                            {/* Pricing Cards */}
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                // Chuyển sang grid-cols-1 trên điện thoại và nới rộng khoảng cách
                                className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:gap-8"
                            >
                                {/* 6 Month Plan */}
                                <div className="flex flex-col justify-center p-5 transition-colors border border-teal-200 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 hover:border-teal-400">
                                    <h3 className="mb-2 text-sm font-bold text-slate-900">
                                        {t('promoPopup.plan_6months')}
                                    </h3>
                                    {/* Giảm size chữ bản Anh (text-lg) và bỏ whitespace-nowrap để nếu cực dài nó tự xuống dòng đẹp thay vì mất chữ */}
                                    <p className={`font-bold text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text ${
                                        isEnglish ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
                                    }`}>
                                        {t('promoPopup.plan_6months_price')}
                                    </p>
                                </div>

                                {/* 12 Month Plan */}
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

                            {/* CTA Button */}
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