import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Star, ShieldCheck, HeartHandshake, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function PricingOptions() {
    const { t } = useTranslation();
    const pricingPlans = t('pricing.plans', { returnObjects: true }) as any[];
    const whyUs = t('pricing.why', { returnObjects: true }) as any[];

    const handleConsultClick = () => {
        window.open('https://www.facebook.com/profile.php?id=61573162288644', '_blank');
    };

    const plan = pricingPlans[0];

    return (
        <section id="pricing" aria-label="Bảng giá phần mềm VibeBooth Photobooth" className="py-24 bg-white">
            <div className="container px-4 mx-auto md:px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <Badge className="px-4 py-1 mb-4 text-teal-800 border-none bg-teal-100/80 hover:bg-teal-200/80">
                        {t('pricing.badge')}
                    </Badge>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl text-slate-900">
                        {t('pricing.title_prefix')}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500">{t('pricing.title')}</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        {t('pricing.desc')}
                    </p>
                </div>

                {/* Full-width Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-24 overflow-hidden rounded-3xl bg-gradient-to-bl from-teal-100 via-emerald-50 to-cyan-100 ring-4 ring-teal-500/30 shadow-2xl"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left - Pricing Info */}
                        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                            <div className="mb-2">
                                <p className="mb-1 text-sm font-bold tracking-wide text-teal-600 uppercase">{plan.theme}</p>
                                <h3 className="text-3xl font-bold text-slate-900 lg:text-4xl">{plan.name}</h3>
                            </div>

                            <div className="inline-flex items-baseline gap-2 my-6">
                                <span className="text-4xl font-black tracking-tight text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                                    {plan.price}
                                </span>
                            </div>

                            <p className="mb-8 text-base leading-relaxed text-slate-600 max-w-md">
                                {plan.description}
                            </p>

                            <Button
                                onClick={handleConsultClick}
                                className="w-full sm:w-auto sm:px-10 rounded-2xl h-14 text-base font-bold transition-all bg-teal-600 hover:bg-teal-700 text-white shadow-xl shadow-teal-500/20 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-[1.02]"
                            >
                                {t('pricing.button_text')}
                            </Button>
                        </div>

                        {/* Right - Features */}
                        <div className="flex items-center p-8 sm:p-10 lg:p-14 lg:border-l border-t lg:border-t-0 border-teal-200/60">
                            <div className="w-full">
                                <p className="mb-6 text-xs font-bold tracking-widest uppercase text-teal-600/80">Bao gồm</p>
                                <ul className="grid grid-cols-1 gap-5">
                                    {plan.features.map((feature: string, i: number) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="flex items-start gap-4 p-4 transition-colors bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-white/80"
                                        >
                                            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-teal-500/10 shrink-0">
                                                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                            </div>
                                            <span className="text-sm font-medium leading-relaxed text-slate-700">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Why Choose VibeBooth? Section */}
                <div className="glass-dark bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[150%] bg-teal-500/20 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 mb-12 text-center">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <ShieldCheck className="w-6 h-6 text-teal-400" />
                            <h3 className="text-2xl font-bold tracking-tight text-white md:text-4xl">{t('pricing.why_title')}</h3>
                        </div>
                        <p className="max-w-2xl mx-auto text-slate-300">{t('pricing.why_desc')}</p>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {whyUs.map((item: any, idx: number) => {
                            const icons = [
                                <Code2 key="code" className="w-8 h-8 text-teal-600" />,
                                <Star key="star" className="w-8 h-8 text-pink-600" />,
                                <HeartHandshake key="heart" className="w-8 h-8 text-amber-600" />
                            ];
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    className="p-6 transition-colors border bg-slate-800/50 backdrop-blur-md border-slate-700/50 rounded-3xl hover:bg-slate-800/80"
                                >
                                    <div className="flex items-center justify-center mb-5 border shadow-inner w-14 h-14 bg-slate-900 rounded-2xl border-slate-700">
                                        {icons[idx]}
                                    </div>
                                    <h4 className="mb-3 text-xl font-bold text-white">{item.title}</h4>
                                    <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}