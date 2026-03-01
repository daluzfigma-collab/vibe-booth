import { motion } from 'framer-motion';
import { CheckCircle2, Store } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const boothModels = [
    {
        id: 1,
        title: 'Rustic Wooden Box',
        desc: 'Thiết kế mộc mạc với chất liệu gỗ tự nhiên, rèm nâu ấm áp và bảng đen phấn trắng cổ điển.',
        idealFor: ['Tiệc cưới ngoài trời', 'Cafe không gian mộc', 'Sự kiện Vintage'],
        img: '/booths/booth-1.jpg',
        badge: 'Mộc mạc'
    },
    {
        id: 2,
        title: 'Elegant White Minimal',
        desc: 'Khối hộp tối giản với hệ rèm thanh lịch, tôn lên sự chuyên nghiệp và tinh khôi.',
        idealFor: ['Sự kiện doanh nghiệp', 'Tiệc cưới sang trọng', 'Fashion Shop'],
        img: '/booths/booth-2.jpg',
        badge: 'Sang trọng'
    },
    {
        id: 3,
        title: 'Retro Classic Black',
        desc: 'Tone đen nhám kết hợp họa tiết typography vintage và rèm nhung đỏ, tạo chất hoài cổ sâu sắc.',
        idealFor: ['Quán Pub, Bar', 'Nhà hàng âu', 'Sự kiện Retro'],
        img: '/booths/booth-3.jpg',
        badge: 'Cá tính'
    },
    {
        id: 4,
        title: 'Red Line Compact',
        desc: 'Thiết kế cực kỳ nhỏ gọn bo góc hiện đại, đi kèm viền đỏ nổi bật, hút mắt người qua lại.',
        idealFor: ['Quán trà sữa', 'Quán Cafe diện tích hẹp', 'Store mặt tiền'],
        img: '/booths/booth-4.jpg',
        badge: 'Tiết kiệm không gian'
    },
    {
        id: 5,
        title: 'Korean Open Studio',
        desc: 'Dạng tủ chụp ảnh nửa mở với vòm bo tròn mềm mại và rèm lụa thả dịu dàng, cực kỳ nịnh mắt.',
        idealFor: ['Concept Cafe Hàn Quốc', 'Tiệm bánh ngọt', 'Mini Studio'],
        img: '/booths/booth-5.jpg',
        badge: 'Hot Trend'
    }
];

export default function TrendingBooths() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-4">
                            <Store className="w-4 h-4" />
                            <span>Thiết kế Module linh hoạt</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Mẫu Booth <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Trending Mới Nhất</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Chiêm ngưỡng các concept lắp đặt Photobooth ngoài đời thực. VibeBooth hỗ trợ biến hóa phong cách thiết kế để cỗ máy hoàn toàn "ăn khớp" với thẩm mỹ và tệp khách hàng của bạn.
                        </p>
                    </motion.div>
                </div>

                {/* CSS grid custom specifically for 5 items (2 top, 3 bottom on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {boothModels.map((booth, idx) => (
                        <motion.div
                            key={booth.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            /* Center the last two items in a 3-column grid */
                            className={idx >= 3 ? "lg:col-span-1" : ""}
                        >
                            <Card className="overflow-hidden border-slate-200/50 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group rounded-2xl bg-white">
                                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-slate-100">
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                                            {booth.badge}
                                        </span>
                                    </div>

                                    {/* Dùng div nền xám dán sẵn hoặc hiển thị ảnh */}
                                    <img
                                        src={booth.img}
                                        alt={booth.title}
                                        className="w-full h-full object-cover transition-transform duration-700"
                                        onError={(e) => {
                                            // Fallback cho ảnh placeholder nếu User chưa kịp up hình
                                            (e.currentTarget as HTMLImageElement).src = `https://placehold.co/600x800/e2e8f0/64748b?text=Booth+${booth.id}`;
                                        }}
                                    />

                                    {/* Subtle overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-60"></div>
                                </div>

                                <CardContent className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">{booth.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{booth.desc}</p>

                                    <div className="space-y-2 pt-4 border-t border-slate-100">
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Gợi ý lắp đặt:</p>
                                        {booth.idealFor.map((ideal, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
                                                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                                                <span>{ideal}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
