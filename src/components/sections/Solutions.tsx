import { motion } from 'framer-motion';
import {
    Store,
    Layers,
    Glasses,
    CreditCard,
    PieChart,
    Headset,
    MapPin,
    Paintbrush,
    Wrench,
    Settings,
    PartyPopper
} from 'lucide-react';

const spaceFeatures = [
    {
        title: "Tư vấn Setup Concept",
        desc: "Mẫu thiết kế shop từ hiện đại, minimalist đến dễ thương kiểu Hàn Quốc.",
        icon: <Store className="w-5 h-5 text-teal-600" />
    },
    {
        title: "Hệ thống Booth đa dạng",
        desc: "Tùy biến nhiều phòng chụp (mỗi phòng một vibe) để tối ưu doanh thu.",
        icon: <Layers className="w-5 h-5 text-teal-600" />
    },
    {
        title: "Kệ trưng bày phụ kiện",
        desc: "Gợi ý cách sắp xếp bờm, kính, đạo cụ tạo trải nghiệm mượt mà.",
        icon: <Glasses className="w-5 h-5 text-teal-600" />
    }
];

const opFeatures = [
    {
        title: "Smart Payment",
        desc: "Thanh toán online (QR) và offline (tiền mặt), tự động hóa quy trình.",
        icon: <CreditCard className="w-5 h-5 text-pink-600" />
    },
    {
        title: "Dashboard từ xa",
        desc: "Theo dõi doanh thu, tình trạng giấy in và vật tư theo thời gian thực.",
        icon: <PieChart className="w-5 h-5 text-pink-600" />
    },
    {
        title: "Support 24/7",
        desc: "Hỗ trợ kỹ thuật từ đội ngũ kỹ sư để máy luôn hoạt động 100%.",
        icon: <Headset className="w-5 h-5 text-pink-600" />
    }
];

const roadmapSteps = [
    { step: 1, title: "Tư vấn mặt bằng", icon: <MapPin className="w-4 h-4" /> },
    { step: 2, title: "Thiết kế không gian", icon: <Paintbrush className="w-4 h-4" /> },
    { step: 3, title: "Lắp đặt thiết bị", icon: <Wrench className="w-4 h-4" /> },
    { step: 4, title: "Cấu hình phần mềm", icon: <Settings className="w-4 h-4" /> },
    { step: 5, title: "Khai trương", icon: <PartyPopper className="w-4 h-4" /> },
];

export default function Solutions() {
    return (
        <section id="solutions" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Giải pháp VibeBooth
                    </h2>
                    <p className="text-lg text-slate-600">
                        Không chỉ bán thiết bị, chúng tôi cung cấp hệ sinh thái kinh doanh Photobooth tự động hóa toàn diện từ A-Z.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-24">

                    {/* Section 1: Space Component */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm mb-4">
                                01. Dành cho Người Mới
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Không gian & Trải nghiệm
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Đánh bay nỗi lo "không biết bắt đầu từ đâu". Chúng tôi tư vấn concept layout để thu hút GenZ ngay từ vòng gửi xe.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {spaceFeatures.map((f, i) => (
                                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start group hover:border-teal-200 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-100 group-hover:scale-110 transition-all">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                                        <p className="text-slate-600 text-sm">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Section 2: Operations Component */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-semibold text-sm mb-4">
                                02. Quản lý Thảnh Thơi
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Vận hành & Thanh toán
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Quản lý chuỗi Photobooth ngay trên chiếc điện thoại của bạn. Giải tỏa nỗi lo cho người không rành công nghệ.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {opFeatures.map((f, i) => (
                                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start group hover:border-pink-200 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 group-hover:bg-pink-100 group-hover:scale-110 transition-all">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                                        <p className="text-slate-600 text-sm">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Section 3: Roadmap */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-vibe opacity-5 mix-blend-multiply"></div>

                    <div className="text-center mb-12 relative z-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Lộ trình Startup VibeBooth</h3>
                        <p className="text-slate-500">Quy trình 5 bước chuẩn mực giúp bạn khai trương chỉ trong 14-30 ngày.</p>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10"></div>

                        {roadmapSteps.map((step) => (
                            <div key={step.step} className="flex flex-col items-center text-center group w-full md:w-1/5 relative">
                                <div className="w-14 h-14 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-slate-400 font-bold mb-4 shadow-sm group-hover:border-teal-400 group-hover:text-teal-500 transition-colors z-10">
                                    {step.icon}
                                </div>
                                <div className="bg-slate-50 px-3 py-1 rounded-full text-xs font-bold text-slate-400 mb-2">BƯỚC {step.step}</div>
                                <h4 className="font-semibold text-slate-800 text-sm md:text-base">{step.title}</h4>
                            </div>
                        ))}
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
