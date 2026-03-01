import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const concepts = [
    {
        id: 1,
        title: 'Modern Pastel Korean Vibe',
        desc: 'Bán chạy nhất cho quán cafe hoặc không gian mở trong giới trẻ.',
        img: '/shop-1.png',
        badge: 'Trending'
    },
    {
        id: 2,
        title: 'Cinematic Vintage Box',
        desc: 'Gọt đẽo chất liệu gỗ và ánh đèn Analog cho pub hoặc lounge.',
        img: '/shop-2.png',
        badge: 'Classic'
    },
    {
        id: 3,
        title: 'Cyberpunk Neon Arcade',
        desc: 'Giải pháp tuyệt vời cho lễ hội âm nhạc hoặc bar, pub.',
        img: '/shop-3.png',
        badge: 'Events'
    }
];

export default function ConceptGallery() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Tùy biến <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500">Mọi Concept Không Gian</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Với thiết kế có tính "Modular" dạng khối ghép, VibeBooth dễ dàng chuyển mình khớp với concept nội thất sẵn có của bạn - từ sự dịu dàng của Korea Style đến độ ngầu của Cyberpunk.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {concepts.map((concept, idx) => (
                        <motion.div
                            key={concept.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                        >
                            <Card className="overflow-hidden border-slate-200/60 shadow-lg hover:shadow-xl transition-all group rounded-3xl h-full">
                                <div className="relative overflow-hidden aspect-[4/5] bg-slate-100">
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                            {concept.badge}
                                        </span>
                                    </div>

                                    {/* Image with zoom effect */}
                                    <img
                                        src={concept.img}
                                        alt={concept.title}
                                        className="w-full h-full object-cover transition-transform duration-700"
                                    />

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300">
                                            <Play className="w-6 h-6 text-white ml-1" />
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{concept.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{concept.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
