import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const quickLinks = (t('footer.quick_links', { returnObjects: true }) as any) || [];
    const solutions = (t('footer.solutions', { returnObjects: true }) as any) || [];
    const contact = (t('footer.contact', { returnObjects: true }) as any) || {};

    return (
        <footer id="contact" className="pt-20 pb-10 border-t bg-slate-950 text-slate-300 border-slate-800">
            <div className="container px-4 mx-auto md:px-6">
                <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            {/* Thay đổi logo từ div chứa chữ sang thẻ img */}
                            <img 
                                src="/vibeBoothLogo.png" 
                                alt="VibeBooth - Giải pháp Photobooth AI hàng đầu Việt Nam" 
                                className="object-contain w-auto h-10 rounded-lg"
                            />
                            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                                VibeBooth
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            {t('footer.brand_tagline')} - {t('footer.brand_description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61573162288644" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 transition-all border rounded-full bg-slate-900 border-slate-800 hover:bg-teal-500 hover:border-teal-400 hover:text-white text-slate-400">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 transition-all border rounded-full bg-slate-900 border-slate-800 hover:bg-pink-500 hover:border-pink-400 hover:text-white text-slate-400">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 transition-all border rounded-full bg-slate-900 border-slate-800 hover:bg-blue-500 hover:border-blue-400 hover:text-white text-slate-400">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-6 font-bold text-white">{t('footer.quick_links_title')}</h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link: any, i: number) => (
                                <li key={i}><a href="#" className="transition-colors hover:text-teal-400">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="mb-6 font-bold text-white">{t('footer.solutions_title')}</h4>
                        <ul className="flex flex-col gap-3">
                            {solutions.map((s: any, i: number) => (
                                <li key={i}><a href="#" className="transition-colors hover:text-pink-400">{s}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-6 font-bold text-white">{t('footer.contact_title')}</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                                <span>{contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                                <span>{contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                                <span>{contact.email}</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm border-t border-slate-800 md:flex-row text-slate-500">
                    <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-300">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-slate-300">{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}