import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Star, ShieldCheck, HeartHandshake, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const pricingPlans = [
    {
        name: 'Khởi Nghiệp',
        theme: 'Vibe Essentials',
        hardware: '60.000.000 VNĐ',
        software: '1.000.000 VNĐ/tháng',
        description: 'Dành cho cá nhân muốn thử sức với mô hình đặt tại cafe/studio nhỏ.',
        features: [
            'Sử dụng các bộ lọc (preset) cơ bản.',
            'Hệ thống xuất ảnh QR Sharing tốc độ cao.',
            'Thanh toán online qua QR tự động.',
            'Hỗ trợ kỹ thuật & vá lỗi từ xa.',
        ],
        highlight: false,
        color: 'from-slate-100 to-slate-50',
        button: 'outline'
    },
    {
        name: 'Chuyên Nghiệp',
        theme: 'Pro AI Vibe',
        hardware: '75.000.000 VNĐ',
        software: '2.000.000 VNĐ/tháng',
        description: 'Bán chạy nhất. Cho shop chuyên dụng cần sự khác biệt tuyệt đối về AI.',
        features: [
            'Full tính năng AI: Cartoonify, AI Retouch.',
            'Tự tạo bộ lọc màu riêng theo brand vibe.',
            'Thiết kế Custom Frame linh hoạt.',
            'Dashboard quản lý trên điện thoại.',
            'Update tính năng AI Trending mới nhất.',
        ],
        highlight: true,
        color: 'from-teal-100 via-emerald-50 to-cyan-100',
        button: 'default'
    },
    {
        name: 'Hệ Sinh Thái',
        theme: 'Enterprise',
        hardware: 'Liên hệ',
        software: '4.000.000 VNĐ/tháng',
        description: 'Cho chủ đầu tư muốn chiếm lĩnh chuỗi hoặc nhượng quyền.',
        features: [
            'White Label: Gỡ logo VibeBooth, hiển thị brand riêng.',
            'Phân quyền quản lý cho nhiều chi nhánh.',
            'Tích hợp đồng bộ thanh toán phức hợp.',
            'Bảo trì tận nơi định kỳ mỗi tháng.',
        ],
        highlight: false,
        color: 'from-pink-100 to-rose-50',
        button: 'outline'
    },
    {
        name: 'Dịch Vụ 360°',
        theme: 'Turnkey Solution',
        hardware: 'Custom',
        software: 'Turnkey',
        description: 'Bàn giao chìa khóa trao tay từ A-Z. Tổng chi phí setup shop ~35M - 75M.',
        features: [
            'Thiết kế Concept & 3D (5M-10M)',
            'Thi công & Decor (15M-40M)',
            'Nội thất & Tủ kệ (7M-15M)',
            'Combo phụ kiện Props Thematic',
            'Đào tạo vận hành lễ tân (Miễn phí từ 2 máy)',
        ],
        highlight: false,
        color: 'from-amber-100 to-yellow-50',
        button: 'outline'
    }
];

const whyUs = [
    {
        icon: <Code2 className="w-8 h-8 text-teal-600" />,
        title: "Làm chủ lõi công nghệ",
        desc: "Không dùng phần mềm mua đi bán lại. Mọi dòng code được tối ưu bởi chuyên gia IT quốc tế."
    },
    {
        icon: <Star className="w-8 h-8 text-pink-600" />,
        title: "AI Cá nhân hóa",
        desc: "Đổi nhân vật hoạt hình, tùy chỉnh preset ngay tại Booth – điều máy giá rẻ không làm được."
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-amber-600" />,
        title: "Đồng hành thực tế",
        desc: "Đội ngũ thi công sẵn sàng biến một mặt bằng trống thành điểm kinh doanh đầy lợi nhuận."
    }
];

export default function PricingOptions() {
    const { t } = useTranslation();
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge className="mb-4 bg-teal-100/80 text-teal-800 hover:bg-teal-200/80 border-none px-4 py-1">
                        {t('pricing.badge')}
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        {t('pricing.title_prefix', 'Investment')}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500">{t('pricing.title')}</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        {t('pricing.desc')}
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {pricingPlans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative rounded-3xl p-6 sm:p-8 flex flex-col h-full bg-gradient-to-bl ${plan.color} ${plan.highlight
                                    ? 'ring-4 ring-teal-500/30 scale-100 lg:scale-105 z-10 shadow-2xl'
                                    : 'border border-slate-200/50 shadow-lg scale-100'
                                } transition-transform`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Badge className="bg-teal-500 text-white font-bold px-4 py-1 uppercase tracking-wider text-xs border-none shadow-md">
                                        Bán chạy nhất
                                    </Badge>
                                </div>
                            )}

                                <div className="mb-6">
                                <p className="text-sm font-bold text-slate-500 mb-1">{t(`pricing.plans.${idx}.theme`, plan.theme)}</p>
                                <h3 className="text-2xl font-bold text-slate-900">{t(`pricing.plans.${idx}.name`, plan.name)}</h3>
                            </div>

                            <div className="mb-6 space-y-4 bg-white/60 p-4 rounded-xl">
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">Phần cứng</p>
                                    <p className="text-xl font-bold text-slate-900">{plan.hardware}</p>
                                </div>
                                {plan.software !== 'Turnkey' && (
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">Phần mềm (Thuê bao)</p>
                                        <p className="text-lg font-bold text-teal-700">{plan.software}</p>
                                    </div>
                                )}
                            </div>

                            <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
                                {t(`pricing.plans.${idx}.description`, plan.description)}
                            </p>

                            <ul className="flex-1 space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                                        <span>{t(`pricing.plans.${idx}.features.${i}`, feature)}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.button as any}
                                className={`w-full rounded-2xl h-12 font-semibold ${plan.button === 'default' ? 'bg-teal-600 hover:bg-teal-700 shadow-xl shadow-teal-500/20' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-900'
                                    }`}
                            >
                                {t('pricing.button_text')}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose VibeBooth? */}
                <div className="glass-dark bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[150%] bg-teal-500/20 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <ShieldCheck className="w-6 h-6 text-teal-400" />
                            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Tại sao giá VibeBooth khiến bạn an tâm?</h3>
                        </div>
                        <p className="text-slate-300 max-w-2xl mx-auto">Chúng tôi lấy chất lượng làm trọng tâm, giúp bạn làm chủ thị trường bằng những công nghệ tạo ra giá trị bền vững.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {whyUs.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800/80 transition-colors"
                            >
                                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-5 border border-slate-700 shadow-inner">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
