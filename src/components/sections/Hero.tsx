import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 100, damping: 15 }
        },
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
            {/* Decorative Blob */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        className="flex flex-col gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200/50 w-fit text-sm font-medium text-slate-700 shadow-sm">
                            <Sparkles className="w-4 h-4 text-teal-500" />
                            <span>{t('hero.badge', 'Giải pháp Photobooth B2B Toàn Diện')}</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                            {t('hero.title_1', 'Khởi nghiệp Photobooth AI:')} <br className="hidden md:block" />
                            <span className="text-gradient">{t('hero.title_2', 'Vốn ít, Công nghệ dẫn đầu.')}</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                            {t('hero.desc_1', 'Cung cấp trọn gói phần cứng và phần mềm quản lý thông minh. Tích hợp AI tạo hình độc quyền giúp bạn khác biệt hoàn toàn với thị trường và mang lại ')}<strong className="text-slate-900">{t('hero.desc_strong', 'lợi nhuận bền vững')}</strong>.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-500 italic max-w-xl border-l-4 border-teal-400 pl-4 py-1">
                            {t('hero.desc_2', '"Được phát triển bởi các kỹ sư phần mềm cao tay hiện đang công tác trong và ngoài nước, có kinh nghiệm sâu về ứng dụng AI, hứa hẹn đáp ứng mọi nhu cầu tùy biến của bạn."')}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white rounded-full h-14 px-8 text-base shadow-xl shadow-teal-500/20 group">
                                {t('hero.btn_quote', 'Nhận báo giá ngay')}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-white/50 backdrop-blur-sm border-slate-200/50 hover:bg-slate-50">
                                {t('hero.btn_demo', 'Xem Demo Phần Mềm')}
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Visual Content - 3D Mockup */}
                    <motion.div
                        className="relative lg:ml-auto w-full max-w-lg xl:max-w-xl"
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.4 }}
                    >
                        <div className="glass-dark absolute inset-0 rounded-[2.5rem] transform -rotate-3 scale-[0.98] z-0 opacity-10"></div>
                        <div className="glass rounded-[2rem] p-4 relative z-10 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/40 via-transparent to-teal-100/40 opacity-50"></div>
                            <img
                                src="/photobooth_3d.png"
                                alt="VibeBooth 3D Teardrop Camper Setup"
                                className="w-full h-auto rounded-2xl object-cover relative z-10 drop-shadow-2xl"
                            />
                            {/* Floating feature badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-6 top-1/4 glass rounded-xl p-3 z-20 flex items-center gap-3 shadow-xl"
                            >
                                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                                    ✨
                                </div>
                                <div className="text-sm font-semibold text-slate-800">AI Magic</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -right-6 bottom-1/4 glass rounded-xl p-3 z-20 flex items-center gap-3 shadow-xl"
                            >
                                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                                    🚀
                                </div>
                                <div className="text-sm font-semibold text-slate-800">Auto Print</div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
