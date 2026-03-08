import { motion } from 'framer-motion';
import {
    Zap,
    LayoutTemplate,
    Image as ImageIcon,
    Video,
    PenTool,
    Wand2,
    QrCode,
    Sparkles,
    Paintbrush,
    
} from 'lucide-react';

const features = [
    {
        title: "Tự động hóa hoàn toàn",
        description: "Từ lúc chạm màn hình đếm ngược đến lúc in ảnh và gửi QR/Email hoàn toàn tự động.",
        icon: <Zap className="w-6 h-6 text-amber-500" />,
        color: "bg-amber-100/50",
        border: "border-amber-200"
    },
    {
        title: "Tuỳ biến Giao diện",
        description: "Hỗ trợ tuỳ biến giao diện (UI) theo nhu cầu doanh nghiệp (Miễn phí 1 lần cập nhật/thay đổi trong năm đầu tiên).",
        icon: <Paintbrush className="w-6 h-6 text-sky-500" />,
        color: "bg-sky-100/50",
        border: "border-sky-200"
    },
    {
        title: "Video FX Đỉnh Cao",
        description: "Vũ khí bí mật: Tự động thêm Slow Motion, Fast Motion, và Reverse cho video cực chất.",
        icon: <Wand2 className="w-6 h-6 text-purple-500" />,
        color: "bg-purple-100/50",
        border: "border-purple-200"
    },
    {
        title: "Thiết kế Layout linh hoạt",
        description: "Ghép 1, 2, 4 kiểu vào khổ in 10x15cm hoặc strip 5x15cm với Template Editor 1 chạm.",
        icon: <LayoutTemplate className="w-6 h-6 text-blue-500" />,
        color: "bg-blue-100/50",
        border: "border-blue-200"
    },
    {
        title: "Green Screen Kỹ Thuật Số",
        description: "AI tự động tách nền siêu mượt, khách hàng vi vu Paris hay đại dương ngay tại Booth.",
        icon: <ImageIcon className="w-6 h-6 text-green-500" />,
        color: "bg-green-100/50",
        border: "border-green-200"
    },
    {
        title: "Hỗ trợ Đa phương tiện",
        description: "Chụp ảnh, tạo GIF, Boomerang và Short Videos với filter xịn xò tích hợp sẵn.",
        icon: <Video className="w-6 h-6 text-rose-500" />,
        color: "bg-rose-100/50",
        border: "border-rose-200"
    },
    {
        title: "Thanh toán Auto QR",
        description: "Máy tự động hiện QR Code, bắt tiền hệ thống ngân hàng hoặc nhận tiền mặt nhanh gọn.",
        icon: <QrCode className="w-6 h-6 text-teal-500" />,
        color: "bg-teal-100/50",
        border: "border-teal-200"
    },
    {
        title: "Vẽ lên ảnh (Signature)",
        description: "Khách có thể ký tên, vẽ vời thả ga lên màn hình cảm ứng để cá nhân hóa ảnh.",
        icon: <PenTool className="w-6 h-6 text-indigo-500" />,
        color: "bg-indigo-100/50",
        border: "border-indigo-200"
    },
    {
        title: "Auto Overlay & Nhạc",
        description: "Tự động ghép nhạc trending, lồng khung ảnh event ngay khi khách vừa quay xong.",
        icon: <Sparkles className="w-6 h-6 text-pink-500" />,
        color: "bg-pink-100/50",
        border: "border-pink-200"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 100 }
    },
};

import { useTranslation } from 'react-i18next';

export default function CoreFeatures() {
    const { t } = useTranslation();
    return (
        <section id="features" className="relative py-24 bg-white">
            <div className="container px-4 mx-auto md:px-6">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl text-slate-900">
                            {t('coreFeatures.title_part1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">{t('coreFeatures.title_highlight')}</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            {t('coreFeatures.desc')}
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className={`p-6 rounded-3xl border ${feature.border} ${feature.color} backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col gap-4 group cursor-pointer`}
                        >
                            <div className="flex items-center justify-center w-12 h-12 transition-transform bg-white shadow-sm rounded-2xl group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-bold text-slate-900">{t(`coreFeatures.features.${i}.title`)}</h3>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {t(`coreFeatures.features.${i}.desc`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
