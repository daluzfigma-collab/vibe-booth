import { motion } from 'framer-motion';
import { ClipboardCheck, Ruler, CalendarClock, Handshake } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const commitmentPoints = [
    {
        id: 1,
        title: 'Khảo sát & Tư vấn chuyên sâu',
        desc: 'Không chỉ bán thiết bị, chúng tôi tìm hiểu cặn kẽ không gian, tệp khách hàng mục tiêu của bạn để tư vấn concept phù hợp và tối ưu tỷ suất đầu tư ROI nhất.',
        icon: <ClipboardCheck className="w-6 h-6 text-teal-600" />,
        color: "bg-teal-50"
    },
    {
        id: 2,
        title: 'Bản đề án chi tiết & Demo 3D',
        desc: 'Mọi họa tiết, vật liệu (sắt, gỗ, rèm), kích thước tổng thể đều được minh bạch trên bản vẽ kỹ thuật chi tiết trước khi chốt thi công, đảm bảo không có sai lệch.',
        icon: <Ruler className="w-6 h-6 text-pink-600" />,
        color: "bg-pink-50"
    },
    {
        id: 3,
        title: 'Tiến độ rõ ràng, Báo cáo liên tục',
        desc: 'Bám sát kế hoạch thi công phần cứng và tinh chỉnh phần mềm. Cập nhật tiến độ hàng ngày/tuần để khách hàng luôn làm chủ được thời gian ra mắt.',
        icon: <CalendarClock className="w-6 h-6 text-indigo-600" />,
        color: "bg-indigo-50"
    },
    {
        id: 4,
        title: 'Đồng hành nghiệm thu & Vận hành',
        desc: 'Bàn giao tận nơi, training trực tiếp cho nhân viên của bạn cách vận hành máy trơn tru, cách thay cuộn in và xử lý các sự cố cơ bản.',
        icon: <Handshake className="w-6 h-6 text-amber-600" />,
        color: "bg-amber-50"
    }
];

export default function Commitment() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content - Text & Steps */}
                    <div className="lg:w-1/2 flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                                Tâm huyết & Trách nhiệm <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Trên từng dự án</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                Khi tiếp nhận dự án, VibeBooth coi đó là một "đứa con tinh thần" thực thụ. Chúng tôi không giao cho bạn một đống linh kiện vô hồn, chúng tôi bàn giao một <strong>mỗ máy in tiền trơn tru</strong>.
                            </p>
                            <p className="text-base text-slate-500 border-l-4 border-slate-200 pl-4 py-1 italic">
                                "Từ những ý tưởng trên giấy đến bản vẽ kỹ thuật chi tiết, chúng tôi luôn có kế hoạch chuẩn xác và theo sát tiến độ công trình đến ngày khánh thành."
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {commitmentPoints.map((point, idx) => (
                                <motion.div
                                    key={point.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 + 0.3 }}
                                >
                                    <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full bg-slate-50/50">
                                        <CardContent className="p-5 flex flex-col gap-3">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${point.color}`}>
                                                {point.icon}
                                            </div>
                                            <h3 className="font-bold text-slate-800 text-lg">{point.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Image / Blueprint */}
                    <motion.div
                        className="lg:w-1/2 w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Decorative backgrounds */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-pink-100 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>
                            <div className="absolute inset-0 bg-slate-900 rounded-3xl transform -rotate-2"></div>

                            {/* Main Image Container */}
                            <div className="relative bg-white p-2 md:p-4 rounded-3xl shadow-2xl border border-slate-200">
                                <div className="overflow-hidden rounded-2xl bg-slate-100 flex items-center justify-center relative group">
                                    <img
                                        src="/commitment-blueprint.jpg"
                                        alt="Bản vẽ kỹ thuật và Demo 3D Photobooth chi tiết của VibeBooth"
                                        className="w-full h-auto object-cover max-h-[600px] transition-transform duration-700"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).src = `https://placehold.co/800x600/e2e8f0/64748b?text=Blueprint+Image`;
                                        }}
                                    />

                                    {/* Overlay Tags */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm border border-slate-200/50 flex items-center gap-1.5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        Approved Design
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
